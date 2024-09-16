import Image from "next/image"

import thumb_1 from "@/assets/img/update/normal/intro_1-1.png"
import thumb_2 from "@/assets/img/update/feature/feature-thumb-3-1.png"

const FeatureAreaTwo = () => {
   return (
      <div className="pt-140 pb-140 overflow-hidden position-relative z-index-common" id="feature">
         <div className="bg-gradient-5"></div>
         <div className="feature-shape-3-1 alltuchtopdown"></div>
         <div className="feature-shape-3-2 alltuchtopdown"></div>
         <div className="container">
            <div className="row">
               <div className="col-xl-6 text-center">
                  <div className="feature-thumb-wrap">
                     <Image className="feature-thumb-3-1 alltuchtopdown" src={thumb_1} alt="img" />
                     <Image className="feature-thumb-3-2" src={thumb_2} alt="img" />
                     <div className="feature-thumb-circle spin"></div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="section-title mb-75">
                     <span className="sub-title text-white">TRUST</span>
                     <h2 className="title style2">Authentication Council</h2>
                     <p className="mt-25 counter-card_text">LuxuryVerse partners with former members of Interpol, the United States Federal Bureau of Investigation (FBI) and other agencies to guarantee its suppliers provide authentic merchandise across the value chain.  All goods are transported, stored and shipped to consumers from LuxuryVerse&apos;s secure facilities.  Together, LuxuryVerse and the <a className="text-decoration-underline text-white" href="us/authenticity">Authentication Council</a> provide total consumer confidence throughout the purchase process.  
                     </p>
                  </div>
                  {/* <div className="counter-grid-wrap">
                     <div className="counter-wrap">
                        <div className="counter-card">
                           <h3 className="counter-card_number">
                              63M
                           </h3>
                           <p className="counter-card_text">Blockchain users</p>
                        </div>
                     </div>
                     <div className="counter-wrap">
                        <div className="counter-card">
                           <h3 className="counter-card_number">
                              24%
                           </h3>
                           <p className="counter-card_text">Companies use blockchain</p>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default FeatureAreaTwo
