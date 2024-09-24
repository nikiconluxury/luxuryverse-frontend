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
      {/* <Breadcrumb title="Authenticity" /> */}
      <AuthArea  />
        {/* <Team /> */}
<DocumentDownload />
      {/* <FooterOne /> */}
      
    </Wrapper>
  )
}

export default index

