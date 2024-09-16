import Image from "next/image";

import intro_thumb from "@/assets/img/update/normal/intro_1-1.png";

interface DataType {
   id: number;
   title: string;
   desc: JSX.Element;
}[];

const intro_data: DataType[] = [
   {
      id: 1,
      title: "Luxury Brands",
      desc: (<>LuxuryVerse has direct access to the world&apos;s top luxury brands.  We have built our industry relationships over decades, ensuring that we have the best styles at the prices.  No one will beat our price.</>),
   },
   {
      id: 2,
      title: "Exclusive Drops",
      desc: (<>Each week, LuxuryVerse releases a limited selection of luxury goods to our members.  We announce these drops one day in advance on X, releasing goods on a first come first serve basis.  Over time, LuxuryVerse will move to daily drops and additional membership levels, enabling earlier access or deeper discounts.</>),
   },
   {
      id: 3,
      title: "Full Authentication",
      desc: (<>LuxuryVerse goods are 100% authentic and guaranteed on the blockchain.  Our goods and services are also supported by the Authentication Council, a group of former FBI and Interpol agents, dedicated to ensuring confidence and trust throughout the entire experience.</>),
   },
]

const IntroArea = () => {
   return (
      <div className="pt-130 overflow-hidden bg-black2">
         <div className="container">
            <div className="row">
               <div className="col-xl-6">
                  <div className="section-title mb-45">
                     <h2 className="title style2">Exclusive Brands</h2>
                     <h2 className="title style1">Exclusive Access</h2>
                     <p className="sec-text">Authenticated luxury goods fully verified on the blockchains</p>
                  </div>
               </div>
            </div>
            <div className="row justify-content-between">
               <div className="col-xl-4">
                  {intro_data.map((item) => (
                     <div key={item.id} className="intro-wrap">
                        <h6 className="intro-wrap-title">{item.title}</h6>
                        <p className="intro-wrap-text">{item.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="col-xl-6">
                  <div className="intro-thumb1 alltuchtopdown">
                     <Image src={intro_thumb} alt="img" />
                  </div>
                  <div className="intro-wrap mt-50">
                     <h6 className="intro-wrap-title">Best Brands, Exclusive Access</h6>
                     <p className="intro-wrap-text">Each week, LuxuryVerse curates an assortment of the best luxury products,
                     all limited in quantity and available for purchase or vaulting.</p>
                     <p className="intro-wrap-text mt-40">Be the first to access limited edition and hard-to-get items from our luxury collections. As a member, youll receive notifications to shop these exclusive releases before anyone else.

Expand icon</p>
                     <p className="intro-wrap-text mt-40">Join a vibrant community of members. Enjoy exclusive events, exciting giveaways, and connect with fellow luxury enthusiasts.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default IntroArea
