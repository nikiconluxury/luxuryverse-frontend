// import Wrapper from "@layouts/Wrapper";
import Wrapper from "../../../../layouts/Wrapper";
import Breadcrumb from "../../../../component/common/Breadcrumb";
// import HeaderThree from "@/layouts/headers/HeaderOne"
// import FooterOne from "@/layouts/footers/FooterOne"
import DocumentDownload from "../../../../component/common/DocumentDownload";
import ContentBlocks from "./ContentBlocks";
import RoadMap from "./RoadMap"
import ChooseArea from "./ChooseArea";
export const metadata = {
  title: "How to Buy",
};
const Roadmap = () => {
  return (
    <Wrapper>
      {/* <Breadcrumb title="How to Buy" /> */}
      {/* <ChooseArea /> */}
            <ContentBlocks />
      {/* <RoadMap />
<DocumentDownload /> */}
      {/* <FooterOne /> */}
      
    </Wrapper>
  )
}

export default Roadmap

