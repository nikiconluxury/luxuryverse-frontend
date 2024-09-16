// import Wrapper from "@/layouts/Wrapper";
// import Breadcrumb from "@/component/common/Breadcrumb";
// import HeaderThree from "@/layouts/headers/HeaderOne"
// import FooterOne from "@/layouts/footers/FooterOne"
import DocumentDownload from "../../../../component/common/DocumentDownload";
import Wrapper from "../../../../layouts/Wrapper"
// import Breadcrumb from "../../../../component/common/Breadcrumb";

import RoadMap from "./RoadMap"
import ChooseArea from "./ChooseArea";
export const metadata = {
  title: "Roadmap",
};
const Roadmap = () => {
  return (
    <Wrapper>
      {/* <HeaderThree /> */}
      {/* <Breadcrumb title="Roadmap" /> */}
      {/* <ChooseArea /> */}
      <RoadMap />
<DocumentDownload />
      
    </Wrapper>
  )
}

export default Roadmap

