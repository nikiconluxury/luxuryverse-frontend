// import Breadcrumb from "@/component/common/Breadcrumb";
import BlogArea from "./BlogArea";
// import DocumentArea from "@/component/common/DocumentArea";
// import FooterThree from "@/layouts/footers/FooterThree";
// import HeaderThree from "@/layouts/headers/HeaderThree";
import Breadcrumb from "../../../component/common/Breadcrumb"
import DocumentArea from "../../../component/common/DocumentArea";
const Blog = () => {
  return (
    <main>
 
      <Breadcrumb title="Our Blog" />
      <BlogArea/>
      <DocumentArea />

    </main>
  )
}

export default Blog;
