// import FooterOne from "@/layouts/footers/FooterOne"
import Brand from "./Brand"
import ChooseArea from "./ChooseArea"
import FeatureAreaTwo from "./FeatureAreaTwo"
import EventArea from "./EventArea"
import FaqArea from "./FaqArea"
import Hero from "./Hero"
import InvestArea from "./InvestArea"
import PartnerArea from "./PartnerArea"
import Team from "./Team"
import RoadMap from "./RoadMap"
// import HeaderOne from "@/layouts/headers/HeaderOne"
// import DocumentDownload from "@/component/common/DocumentDownload";
import DocumentDownload from "../../../component/common/DocumentDownload";
const HomeOne = () => {
  return (
    <div className="home-purple-gradient">
      {/* <HeaderOne /> */}
      <Hero />

      {/* <ChooseArea /> */}

    
      {/* <RoadMap /> */}
      <Brand />
      {/* <InvestArea /> */}
      <FeatureAreaTwo />
      {/* <Team />
      <PartnerArea /> */}
      {/* <EventArea /> */}
      <FaqArea />
      {/* <DocumentDownload/> */}
      {/* <FooterOne /> */}
    </div>
  )
}

export default HomeOne
