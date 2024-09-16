import { Region } from "@medusajs/medusa"
import { notFound } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"
import { getToken } from 'next-auth/jwt';
const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
const DEFAULT_REGION = process.env.NEXT_PUBLIC_DEFAULT_REGION || "us"

const regionMapCache = {
  regionMap: new Map<string, Region>(),
  regionMapUpdated: Date.now(),
}

export async function getRegionMap() {
  const { regionMap, regionMapUpdated } = regionMapCache

  if (
    !regionMap.keys().next().value ||
    regionMapUpdated < Date.now() - 3600 * 1000
  ) {
    // Fetch regions from Medusa. We can't use the JS client here because middleware is running on Edge and the client needs a Node environment.
    const { regions } = await fetch(`${BACKEND_URL}/store/regions`, {
      next: {
        revalidate: 3600,
        tags: ["regions"],
      },
    }).then((res) => res.json())

    if (!regions) {
      notFound()
    }

    // Create a map of country codes to regions.
    regions.forEach((region: Region) => {
      region.countries.forEach((c) => {
        regionMapCache.regionMap.set(c.iso_2, region)
      })
    })

    regionMapCache.regionMapUpdated = Date.now()
  }

  return regionMapCache.regionMap
}

/**
 * Fetches regions from Medusa and sets the region cookie.
 * @param request
 * @param response
 */
export async function getCountryCode(
  request: NextRequest,
  regionMap: Map<string, Region | number>
) {
  try {
    let countryCode

    const vercelCountryCode = request.headers
      .get("x-vercel-ip-country")
      ?.toLowerCase()

    const urlCountryCode = request.nextUrl.pathname.split("/")[1]?.toLowerCase()

    if (urlCountryCode && regionMap.has(urlCountryCode)) {
      countryCode = urlCountryCode
    } else if (vercelCountryCode && regionMap.has(vercelCountryCode)) {
      countryCode = vercelCountryCode
    } else if (regionMap.has(DEFAULT_REGION)) {
      countryCode = DEFAULT_REGION
    } else if (regionMap.keys().next().value) {
      countryCode = regionMap.keys().next().value
    }

    return countryCode
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(
        "Middleware.ts: Error getting the country code. Did you set up regions in your Medusa Admin and define a NEXT_PUBLIC_MEDUSA_BACKEND_URL environment variable?"
      )
    }
  }
}

/**
 * Middleware to handle region selection and onboarding status.
 */
export async function middleware(request: NextRequest) {
  const { pathname, searchParams, origin } = request.nextUrl;
  const cartId = searchParams.get("cart_id");
  const checkoutStep = searchParams.get("step");
  const cartIdCookie = request.cookies.get("_medusa_cart_id");

  // Simulate fetching the region map and determine country code
  const regionMap = await getRegionMap();
  const countryCode = regionMap && (await getCountryCode(request, regionMap));
  const urlHasCountryCode = countryCode && pathname.includes(`/${countryCode}`);

  // Public paths check considering country code
  const publicPaths = [`/${countryCode}`,`/${countryCode}/locked-out`, `/${countryCode}/token-balance`,`/${countryCode}/roadmap`,
    `/${countryCode}/privacy`,`/${countryCode}/service`,`/${countryCode}/authenticity`,`/${countryCode}/faq`,`/${countryCode}/contact`
    ,`/${countryCode}/buy`,`/${countryCode}/rwa`,`/${countryCode}/team`,`/${countryCode}/register`];
  // Get JWT token to check authentication
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // Redirect logic for non-authenticated access to public pages
  if (!token && !publicPaths.includes(pathname)) {
    const redirectUrl = `${origin}/${countryCode}/locked-out`;
    return NextResponse.redirect(redirectUrl, 307);
  }

  // If no country code in the URL and we have a country code, redirect to the appropriate region
  if (!urlHasCountryCode && countryCode) {
    const redirectUrl = `${origin}/${countryCode}${pathname}${request.nextUrl.search}`;
    return NextResponse.redirect(redirectUrl, 307);
  }

  // If a `cart_id` is in the params and not in the checkout step, set it as a cookie and redirect
  if (cartId && !checkoutStep && !cartIdCookie) {
    const redirectUrl = `${origin}${pathname}?cart_id=${cartId}&step=address`;
    const response = NextResponse.redirect(redirectUrl, 307);
    response.cookies.set("_medusa_cart_id", cartId, { maxAge: 60 * 60 * 24, path: '/' });
    return response;
  }

  // Proceed with the response if no conditions apply
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};