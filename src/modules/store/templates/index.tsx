import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
// import Wrapper from "@/layouts/Wrapper";
import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1

  return (
    <div className="hero-wrapper hero-1-store">
    <div className="hero-bg-gradient-store">
    </div>
    <div  className="ripple-shape-store" 
      // style={{
      //   transform: 'skewX(240deg)',
      //   position: 'relative',
      //   zIndex: -1,
      //   opacity: 0.3}}
      >
       <span className="ripple-1-store"></span>
       <span className="ripple-2-store"></span>
       <span className="ripple-3-store"></span>
       <span className="ripple-4-store"></span>
       <span className="ripple-5-store"></span>
    </div>
    <div className="flex flex-col small:flex-row small:items-start py-40 content-container" data-testid="category-container">
      
      <RefinementList sortBy={sortBy || "created_at"} />
      <div className="w-full">
        {/* <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">All products</h1>
        </div> */}
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sortBy || "created_at"}
            page={pageNumber}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div></div>
  )
}

export default StoreTemplate
