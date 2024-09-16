import Image, { StaticImageData } from "next/image";

import shape_1 from "@/assets/img/update/feature/feature-shape-2-1.png"
import shape_2 from "@/assets/img/update/feature/feature-shape-2-2.png"
import shape_3 from "@/assets/img/update/feature/feature-shape-2-3.png"
import feature_thumb_1 from "@/assets/img/update/feature/feature-card-thumb-1.png"
import feature_thumb_2 from "@/assets/img/update/feature/feature-card-thumb-2.png"
import feature_thumb_3 from "@/assets/img/update/feature/feature-card-thumb-3.png"

interface DataType {
   id: number;
   title: string;
   thumb: StaticImageData;
   desc_1: string;
   desc_2: string;
}[];

const feature_data: DataType[] = [
   {
      id: 1,
      title: "2. Stay Alert for LuxuryVerse Drops",
      thumb: feature_thumb_2,
      desc_1: "Each week, LuxuryVerse will announce its drops on X.  Each drop requires a certain amount of LuxuryVerse tokens to access a limited quantity of products across a number of luxury categories including apparel, shoes, watches, jewelry and beauty.",
      desc_2: "As time passes, we'll increase the drops from weekly to bi-weekly and then to daily, ensuring that you get the best...at the best prices.  However, you'll need to stay alert: once it's gone, it's gone.",
   },
   {
      id: 2,
      title: "3. Login to LuxuryVerse",
      thumb: feature_thumb_3,
      desc_1: "Once an event drops, simply click on the link from X or go to the home page to access the products.",
      desc_2: "You'll need a certain amount of LuxuryVerse tokens to get in, but once you are in, you have complete access to buy what you love.  Visit the listing page to see all of the products in one place.",
   },
   {
    id: 3,
    title: "4. Shop & Pay",
    thumb: feature_thumb_1,
    desc_1: "Each drop contains a limited supply of goods, all built around a brand, category or theme.  It's first come, first serve so select products just as you would on your favorite site, though you will only pay with ETH.",
    desc_2: "Our selection is built upon the best brands and the best prices so you can select, pay and check out in with total confidence.",
 },
 {
    id: 4,
    title: "5. Receive & Enjoy",
    thumb: feature_thumb_2,
    desc_1: "Once confirmed, LuxuryVerse will register each purchase on the blockchain and then ship your order to the address provided.",
    desc_2: "We ship most orders in 3-5 business days using FedEx.  Each order is confirmed via email, with LuxuryVerse following up with tracking information on ship date.  Registering on the blockchain establishes true ownership and allows you to enjoy your new item or trade it with total confidence.",
 },
];

const ContentBlocks = () => {
   return (
      <div className="feature-area-2 pt-110 pb-140 position-relative overflow-hidden" style={{ backgroundImage: `url(/assets/img/update/bg/feature-area-bg.png)`, backgroundSize: "cover", backgroundPosition: "center" }} id="blockchain">
         {/* <div className="feature-area-shape"
         style={{ zIndex: -1}} 
         
         >
            <Image className="feature-shape2-1 alltuchtopdown" src={shape_1} alt="img" />
            <Image className="feature-shape2-2 alltuchtopdown" src={shape_2} alt="img" />
            <Image className="feature-shape2-3 leftToRight" src={shape_3} alt="img" />

         </div> */}
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-xl-5 col-lg-8">
                  <div className="section-title text-center mb-50" 
                  style={{zIndex:2}}
                  >
                     <span className="sub-title">ABOUT BLOCKCHAIN</span>
                     <h2 className="title style2">Buying on LuxuryVerse</h2>
                     <p className="sec-text text-white text-2xl" > Follow these five easy steps
                     </p>
                  </div>
               </div>
            </div>
            {/* <div className="feature-grid-wrap"> */}
               <div className="feature-card-grid mb-2">
                  <div className="feature-card-details">
                     <h3 className="feature-card-title">1. Connect to LuxuryVerse</h3>
                     <p className="feature-card-text">Get started by connecting your wallet and your X account to LuxuryVerse.  LuxuryVerse is a members only site and can only be accessed by verified members with a certain amount of LuxuryVerse tokens, available through our site and key exchanges.  
                     </p>
                     <p className="feature-card-text">Once connected, LuxuryVerse verifies access with each shopping journey, ensuring that only our top members access the best luxury goods.
                     </p>
                     {/* <div className="checklist">
                        <ul>
                           <li><i className="fas fa-circle"></i> Blockchain solutions for their business.</li>
                           <li><i className="fas fa-circle"></i> Blockchain solutions for their business.</li>
                           <li><i className="fas fa-circle"></i> Blockchain solutions for their business.</li>
                        </ul>
                     </div> */}
                  </div>
                  <div className="feature-card-img">
                     {/* <Image className="alltuchtopdown" src={feature_thumb_1} alt="img" /> */}
                  </div>
               </div>
               {feature_data.map((item) => (
                  <div key={item.id} className="feature-card-grid mb-2">
                     <div className="feature-card-details">
                        <h3 className="feature-card-title">{item.title}</h3>
                        <p className="feature-card-text">{item.desc_1}</p>
                        <p className="feature-card-text">{item.desc_2}</p>
                     </div>
                     <div className="feature-card-img">
                        {/* <Image src={item.thumb} alt="img" /> */}
                     </div>
                  </div>
               ))}
            </div>
         </div>
    //   </div>
   )
}

export default ContentBlocks
