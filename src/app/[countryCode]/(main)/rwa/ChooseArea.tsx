import Image, { StaticImageData } from "next/image";

import choose_thumb_1 from "@/assets/img/update/bg/bg-gradient1-1.jpg"
import choose_thumb_2 from "@/assets/img/update/normal/cta_3-1.png"

import icon_1 from "@/assets/img/update/icon/feature-icon1-1.svg"
import icon_2 from "@/assets/img/update/icon/feature-icon1-2.svg"
import icon_3 from "@/assets/img/update/icon/feature-icon1-3.svg"

interface DataType {
   id: number;
   title: string;
   price: string;
   skill: string;
   value: string;
   value_2: string;
}[];

interface DataType2 {
   id: number;
   icon: StaticImageData;
   title: string;
   price?: string;
   desc: string;
}[];

const amount_data: DataType[] = [
   {
      id: 1,
      title: "Fact 3",
      price: "0.36 $",
      skill: "70%",
      value: "100",
      value_2: "100,000",
   },
   {
      id: 2,
      title: "Fact 4",
      price: "0.36 $",
      skill: "80%",
      value: "100",
      value_2: "100,000",
   },
   {
      id: 3,
      title: "Fact 5",
      price: "Q3 2020",
      skill: "40%",
      value: "100",
      value_2: "100,000",
   },
];

const choose_data: DataType2[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Fact 6",
      price: "180,000",
      desc: "ROI = 360 %",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Fact 7",
      desc: "3600 FOX = 1296 $",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Fact 8",
      price: "180,000",
      desc: "ROI = 360 %",
   },
]

const ChooseArea = () => {
   return (
      <div className="wcu-area-1 pt-130 pb-140 position-relative" id="feature">
         <div className="bg-gradient-1">
            <Image src={choose_thumb_1} alt="img" />
         </div>
         <div className="container">
            <div className="mb-25">
               <div className="row gy-5">
                  <div className="col-lg-7">
                     <div className="section-title mb-15">
                        <h2 className="title style2">RWAs Explained</h2>
                        <p className="sec-text">Everything you need to know about RWAs
                        </p>
                        <p className="sec-text">Real-world assets (RWAs) refer to tangible assets that hold intrinsic value and can be owned, traded, or utilized for various purposes. In the context of luxury goods, RWAs encompass high-value items that are often perceived not only as consumer products but also as investments or status symbols. LuxuryVerse is first-to-market in democratizing a wide selection of authenticated luxury goods at exclusive insider prices.  
                        </p>
                        <h2 className="title2 style2 mb-25 mt-25">Key Aspects of Real-World Assets Related to Luxury Goods:</h2>
                     </div>

                     <div className="section-title mb-0">
                        <h6 >Tangible Value:</h6>
                        <p className="sec-text">Luxury goods, such as fine art, jewelry, high-end watches, and rare collectibles, are physical items that can appreciate over time. Their value is often tied to factors like brand reputation, rarity, craftsmanship, and demand.
                        </p> 
                        <h6 className="mt-25" >Investment Potential:</h6>
                        <p className="sec-text mb-25">Many luxury items are viewed as investment vehicles. For instance, certain designer handbags or limited-edition sneakers can appreciate significantly in value, making them attractive for collectors and investors alike.
                        </p> 

                        <h6 className="mt-25" >Scarcity and Exclusivity:</h6>
                        <p className="sec-text mb-25">Luxury goods often rely on scarcity to maintain their value. High-end brands frequently produce limited quantities of items, creating exclusivity that enhances demand and value.
                        </p> 

                        <h6 className="mt-25" >Cultural and Social Significance:</h6>
                        <p className="sec-text mb-25">Luxury goods often carry cultural and social meanings that deepen their desirability. Owning luxury items can signify social status, taste, or success, making them more than just physical possessions.
                        </p> 
                        <h6 className="mt-25" >Market Dynamics:</h6>
                        <p className="sec-text mb-25"> The market for luxury goods can be influenced by trends, economic conditions, and shifts in consumer preferences. Luxury brands may engage in strategic marketing to maintain brand prestige and drive demand.
                        </p> 
                        <h6 className="mt-25" >Authenticity and Provenance:</h6>
                        <p className="sec-text mb-25">With the rise of counterfeits, authenticity plays a crucial role in the value of luxury goods. Provenance— the history of ownership—can significantly impact an items desirability and market value. LuxuryVerse has deep relationships within the luxury sector.  Our reputation is built on decades in the industry and backed by the Authentication Council, a team of former FBI and Interpol agents to ensure total transparency and trust.
                        </p> 
                        <h6 className="mt-25" >Digital Transformation:</h6>
                        <p className="sec-text mb-25">The rise of blockchain technology has led to developments in how luxury goods are bought and sold, with some brands exploring digital certificates of authenticity or ownership, enhancing transparency in the luxury market. LuxuryVerse employs the blockchain in its quest for full confidence in luxury ownership.
                        </p> 
                        <p className="sec-text mb-25">In summary, real-world assets in luxury goods represent a unique intersection of tangible value, investment potential, cultural significance, and market dynamics, making them a fascinating area for both collectors and investors. LuxuryVerse aims to be the global leader in real world assets.
                        </p> 
                     </div> 

                  </div>
                  {/* <div className="col-lg-5">
                     <div className="wcu-thumb text-center alltuchtopdown"> */}
                     <div className="col-lg-5 flex justify-center">
                     {/* <div className="wcu-thumb alltuchtopdown">
                        <Image src={choose_thumb_2} alt="img" className="w-full max-w-xl" />
                     </div> */}
                  </div>
               </div>
            </div>
           
         </div>
      </div>
   )
}

export default ChooseArea
