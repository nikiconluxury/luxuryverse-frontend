import Link from "next/link"
import DocumentForm from "../forms/DocumentForm"
import Image from "next/image"

import docShape from "@/assets/img/images/document_shape.png"

// const doc_data: string[] = ["Whitepaper", "Token Sale Terms", "Presentation", "Lightpaper"]
const doc_data: string[] = ["Whitepaper", "Presentation", "Lightpaper"]

const DocumentDownload = () => {
   return (
      <section className="document-area mt-25">
         <div className="container">
            <div className="document-inner-wrap">

               <div className="row">
                  <div className="col-lg">
                     <div className="document-wrap">
                        <h4 className="title">Read Documents</h4>
                        <ul className="list-wrap">
                           {doc_data.map((list, i) => (
                              <li key={i}>
                                 <Link href="#">
                                    <span className="icon"><i className="fas fa-file-pdf"></i></span>
                                    {list}
                                 </Link>
                              </li>
                           ))}
                        </ul>
                        <Link href="#" className="btn">Download All</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <div className="document-shape">
            <Image src={docShape} alt="" className="alltuchtopdown" />
         </div> */}
      </section>
   )
}

export default DocumentDownload
