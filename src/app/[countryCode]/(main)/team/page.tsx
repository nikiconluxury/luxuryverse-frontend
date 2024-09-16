import Wrapper from "../../../../layouts/Wrapper";

import Breadcrumb from "../../../../component/common/Breadcrumb";
import AuthArea from "./AuthArea";
import Team from "./Team";
// import HeaderThree from "@/layouts/headers/HeaderOne"
// import FooterOne from "@/layouts/footers/FooterOne"
import DocumentDownload from "../../../../component/common/DocumentDownload";
export const metadata = {
  title: "Authenticity",
};
const index = () => {
  return (
    <Wrapper>
      {/* <HeaderThree /> */}
      {/* <Breadcrumb title="Our Team" /> */}
      <AuthArea  />
        <Team />
<DocumentDownload />
      
    </Wrapper>
  )
}

export default index

