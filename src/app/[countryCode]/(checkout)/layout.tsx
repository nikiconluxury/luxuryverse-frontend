import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="hero-wrapper hero-1-cart w-full relative small:min-h-screen">
    <div className="hero-bg-gradient-cart">
    </div>
    <div className="ripple-shape-cart">
       <span className="ripple-1-cart"></span>
       <span className="ripple-2-cart"></span>
       <span className="ripple-3-cart"></span>
       <span className="ripple-4-cart"></span>
       <span className="ripple-5-cart"></span>
    </div>
      <div className="h-16 border-b ">
        <nav className="flex h-full items-center content-container justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-small-semi text-white flex items-center gap-x-2 uppercase flex-1 basis-0"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90" size={16} />
            <span className="mt-px hidden small:block txt-compact-plus text-white hover:text-ui-fg-interactive ">
              Back to shopping cart
            </span>
            <span className="mt-px block small:hidden txt-compact-plus text-white hover:text-ui-fg-interactive">
              Back
            </span>
          </LocalizedClientLink>
          <LocalizedClientLink
            href="/"
            className="txt-compact-xlarge-plus text-white hover:text-ui-fg-base uppercase"
            data-testid="store-link"
          >
          LUXURYVERSE
          </LocalizedClientLink>
          <div className="flex-1 basis-0" />
        </nav>
      </div>
      <div className="relative" data-testid="checkout-container">{children}</div>
      <div className="py-4 w-full flex items-center justify-center">
        {/* <MedusaCTA /> */}
      </div>
    </div>
  )
}
