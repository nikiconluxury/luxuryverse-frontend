import { Metadata } from "next"

// import Footer from "@/layouts/footers/FooterOne"
// import Nav from "@/layouts/headers/HeaderOne"
// import Nav from "@modules/layout/templates/nav"
import Footer from "../../../layouts/footers/FooterOne"
import Nav from "../../../layouts/headers/HeaderOne"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  )
}
