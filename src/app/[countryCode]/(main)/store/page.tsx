import { Metadata } from "next"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import StoreTemplate from "@modules/store/templates"
// import Wrapper from "@/layouts/Wrapper";
import Wrapper from "../../../../layouts/Wrapper";

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: {
    sortBy?: SortOptions
    page?: string
  }
  params: {
    countryCode: string
  }
}

export default async function StorePage({ searchParams, params }: Params) {
  const { sortBy, page } = searchParams

  return (
    <Wrapper>
    <StoreTemplate
      sortBy={sortBy}
      page={page}
      countryCode={params.countryCode}
    /></Wrapper>
  )
}
