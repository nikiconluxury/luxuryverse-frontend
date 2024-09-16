"use client"
import Image from "next/image"
import Link from "next/link"
import Slider from "react-slick";
// import hero_data from "@/data/HeroData";
import hero_thumb from "@/assets/img/update/hero/hero-1-1.jpg"
// import CountdownClock from "@/ui/CountDownClock"
import React, { useRef } from "react";
import CountdownClock from "../../../ui/CountDownClock";
import hero_data from "../../../data/HeroData";
const settings = {
   dots: false,
   infinite: false,
   speed: 0,
   autoplay: false,
   arrows: false,
   slidesToShow: 3,
   slidesToScroll: 0,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
         }
      },
   ]
}

const Hero = () => {
   const sliderRef = useRef<Slider | null>(null);

   const handlePrevClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickPrev();
      }
   };

   const handleNextClick = () => {
      if (sliderRef.current) {
         sliderRef.current.slickNext();
      }
   };

   return (
      <div className="hero-wrapper hero-1">
         <div className="hero-bg-gradient">
         </div>
         <div className="ripple-shape">
            <span className="ripple-1"></span>
            <span className="ripple-2"></span>
            <span className="ripple-3"></span>
            <span className="ripple-4"></span>
            <span className="ripple-5"></span>
         </div>

         <div className="container">
            <div className="hero-style1">
               <div className="row flex-row-reverse">
                  <div className="col-lg-3">
                     {/* <div className="hero-thumb alltuchtopdown">
                        <Image src={hero_thumb} alt="img" />
                     </div> */}
                  </div>
                  <div className="col-lg-9">
                     <h1 className="hero-title">Exclusive Brands<br></br> Exclusive Access</h1>
                     <h1 className="title-hero mt-10">Authenticated luxury goods, <br></br> fully verified on the blockchain</h1>
                     <div className="btn-wrap mb-30">
                        <Link href="us/register" className="btn btn2" >
                        Connect Wallet
                        </Link>
                        {/* <Link href="/blog" className="btn btn-two" >
                           Early Access
                        </Link> */}
                        
                     </div>
                  </div>

               </div>
               
            </div>


        
       
            {/* <div className="container-fluid p-0">
            <div className="slider-area position-relative">
               <Slider {...settings} ref={sliderRef} className="row roadMap-active2 roadmap-slider1"> */}
               
               <div className="row justify-content-center">
                  {hero_data.map((item) => (
                     <div key={item.id} className="col-lg">
                        <div className="hero-item">
                           <div className="hero-content">
                              <h4 className="title">{item.title}</h4>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               {/* </Slider>
            </div>
         </div> */}
         </div>

            <div className="hero-countdown-wrap mt-50">
               <h2 className="hero-countdown-wrap-title">Launching September 2024</h2>
               <div className="center-document mt-50">
                  <h4>First Drop: September 24th, 2024</h4>

               </div>
               {/* <div className="skill-feature">
                  <div className="progress">
                     <div className="progress-bar" style={{ width: "80%" }}>
                     </div>
                  </div>
                  <div className="progress-value-max">100 Min $</div>
               </div> */}
               {/* <ul className="skill-feature_list style2">
                  <li>7.75 Min</li>
                  <li>1.5 Min</li>
                  <li>140,000 $ chosen</li>
               </ul> */}
               <div className="banner-countdown-wrap">
                  <div className="coming-time" data-countdown="2024/9/24">
                  <CountdownClock />
                  </div>
               </div>
            </div>

         </div> 
      </div>
   )
}

export default Hero
