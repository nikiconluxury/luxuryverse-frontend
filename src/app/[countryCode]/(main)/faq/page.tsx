
// import Breadcrumb from "@/component/common/Breadcrumb"
// import FaqArea from "@/component/common/FaqArea"
// import Wrapper from "@/layouts/Wrapper";

import Breadcrumb from "../../../../component/common/Breadcrumb"
import FaqArea from "../../../../component/common/FaqArea"
import Wrapper from "../../../../layouts/Wrapper";
export const metadata = {
   title: "FAQ - LuxuryVerse",
};
const index = () => {
    return (
        <main>
         <Wrapper>
    
            {/* <Breadcrumb title="FAQ" /> */}
           {/* <ContactArea /> */}
           <FaqArea />
           {/* <FooterThree /> */}
           </Wrapper >
        </main>
     )
  }
  

export default index
