// import { Text, clx } from "@medusajs/ui"

// import { getCategoriesList, getCollectionsList } from "@lib/data"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import MedusaCTA from "@modules/layout/components/medusa-cta"

// export default async function Footer() {
//   const { collections } = await getCollectionsList(0, 6)
//   const { product_categories } = await getCategoriesList(0, 6)

//   return (
//     <footer className="border-t border-ui-border-base w-full">
//       <div className="content-container flex flex-col w-full">
//         <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
//           <div>
//             <LocalizedClientLink
//               href="/"
//               className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
//             >
             
//               LuxuryVerse

//             </LocalizedClientLink>
//           </div>
//           <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
//             {product_categories && product_categories?.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Categories
//                 </span>
//                 <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
//                   {product_categories?.slice(0, 6).map((c) => {
//                     if (c.parent_category) {
//                       return
//                     }

//                     const children =
//                       c.category_children?.map((child) => ({
//                         name: child.name,
//                         handle: child.handle,
//                         id: child.id,
//                       })) || null

//                     return (
//                       <li
//                         className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
//                         key={c.id}
//                       >
//                         <LocalizedClientLink
//                           className={clx(
//                             "hover:text-ui-fg-base",
//                             children && "txt-small-plus"
//                           )}
//                           href={`/categories/${c.handle}`}
//                           data-testid="category-link"
//                         >
//                           {c.name}
//                         </LocalizedClientLink>
//                         {children && (
//                           <ul className="grid grid-cols-1 ml-3 gap-2">
//                             {children &&
//                               children.map((child) => (
//                                 <li key={child.id}>
//                                   <LocalizedClientLink
//                                     className="hover:text-ui-fg-base"
//                                     href={`/categories/${child.handle}`}
//                                     data-testid="category-link"
//                                   >
//                                     {child.name}
//                                   </LocalizedClientLink>
//                                 </li>
//                               ))}
//                           </ul>
//                         )}
//                       </li>
//                     )
//                   })}
//                 </ul>
//               </div>
//             )}
//             {collections && collections.length > 0 && (
//               <div className="flex flex-col gap-y-2">
//                 <span className="txt-small-plus txt-ui-fg-base">
//                   Collections
//                 </span>
//                 <ul
//                   className={clx(
//                     "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
//                     {
//                       "grid-cols-2": (collections?.length || 0) > 3,
//                     }
//                   )}
//                 >
//                   {collections?.slice(0, 6).map((c) => (
//                     <li key={c.id}>
//                       <LocalizedClientLink
//                         className="hover:text-ui-fg-base"
//                         href={`/collections/${c.handle}`}
//                       >
//                         {c.title}
//                       </LocalizedClientLink>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//             <div className="flex flex-col gap-y-2">
//               <span className="txt-small-plus txt-ui-fg-base">Medusa</span>
//               <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
//                 <li>
//                   <a
//                     href="https://github.com/medusajs"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     GitHub
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://docs.medusajs.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Documentation
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://github.com/medusajs/nextjs-starter-medusa"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="hover:text-ui-fg-base"
//                   >
//                     Source code
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="flex w-full mb-16 justify-between text-ui-fg-muted">
//           <Text className="txt-compact-small">
//             © {new Date().getFullYear()} Medusa Store. All rights reserved.
//           </Text>
//           <MedusaCTA />
//         </div>
//       </div>
//     </footer>
//   )
// }
import Image from "next/image"
import Link from "next/link";

import footer_bg from "@/assets/img/update/bg/bg-gradient1-1.jpg";

const FooterOne = () => {
   return (
      <footer className="footer-wrapper footer-layout1 position-relative mt-20">
         <div className="bg-gradient-1">
            <Image src={footer_bg} alt="img" />
         </div>
         <div className="container">
            <div className="footer-menu-area">
               <div className="row gy-4 justify-content-between align-items-center">
                  <div className="col-xl-5 col-lg-4">
                     <div className="social-btn justify-content-center justify-content-lg-start">
                        {/* <Link href="https://www.facebook.com/">
                           <i className="fab fa-facebook-f"></i>
                        </Link> */}
                        <Link href="#">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path
                                 d="M10.0596 7.34522L15.8879 0.570312H14.5068L9.44607 6.45287L5.40411 0.570312H0.742188L6.85442 9.46578L0.742188 16.5703H2.12338L7.4676 10.3581L11.7362 16.5703H16.3981L10.0593 7.34522H10.0596ZM8.16787 9.54415L7.54857 8.65836L2.62104 1.61005H4.74248L8.71905 7.29827L9.33834 8.18405L14.5074 15.5779H12.386L8.16787 9.54449V9.54415Z"
                                 fill="currentColor"></path>
                           </svg>
                        </Link>
                        <Link href="https://instagram.com/">
                           <i className="fab fa-instagram"></i>
                        </Link>
                        <Link href="https://linkedin.com/">
                           <i className="fab fa-linkedin"></i>
                        </Link>
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-8 text-lg-end text-center">
                     <ul className="footer-menu-list">
                        <li>
                           <Link href="/#">
                              HOME
                           </Link>
                        </li>
                        {/* <li>
                           <Link href="#">
                              OUR PROJECTS
                           </Link>
                        </li> */}
               
                        <li>
                           <Link href="/roadmap">
                              ROADMAP
                           </Link>
                        </li>
                        <li>
                           <Link href="/authenticity">
                              AUTHENTICITY
                           </Link>
                        </li>
                        <li>
                           <Link href="/faq">
                              FAQ
                           </Link>

                        </li>
                        <li>
                           <Link href="/contact">
                              CONTACT
                           </Link>
                           
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright-wrap text-center text-lg-start">
            <div className="container">
               <div className="row gy-3 justify-content-between align-items-center">
                  <div className="col-lg-6 align-self-center">
                     <p className="copyright-text">Copyright © 2024 <Link href="#">LuxuryVerse.</Link> All rights reserved.</p>
                  </div>
                  <div className="col-lg-6 text-lg-end">
                     <ul className="footer-links">
                        {/* <li>
                           <Link href="blog.html">
                              Job & Career
                           </Link>
                        </li> */}
                        <li>
                           <Link href="/service">
                              Terms and Condition
                           </Link>
                        </li>
                        <li>
                           <Link href="/privacy">
                             Privacy Policy
                           </Link>
                        </li>
                     </ul>
                  </div>

               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
