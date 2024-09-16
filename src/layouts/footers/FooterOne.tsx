"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image"
import Link from "next/link";
import footer_bg from "@/assets/img/update/bg/bg-gradient1-1.jpg";
// import { getCountryCode, getRegionMap } from "../middleware";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const FooterOne: React.FC = () => {

   // const [countryCode, setCountryCode] = useState('us');
 
   // useEffect(() => {
   //   const fetchData = async () => {
   //     try {
   //       const regionMap = await getRegionMap();
   //       if (regionMap) {
   //         const code = await getCountryCode(regionMap);
   //         setCountryCode(code);
   //       }
   //     } catch (error) {
   //       console.error("Error fetching data:", error);
   //     }
       

   //   };
 
   //   fetchData();
   // }, []); // Empty dependency array means this effect runs once on mount
   
   const countryCode = 'us';
   return (
      <footer className="footer-wrapper footer-layout1 position-relative mt-20">
         <div className="bg-gradient-1">
            <Image src={footer_bg} alt="img" />
         </div>
         <div className="container">
            <div className="footer-menu-area">
               <div className="row gy-4 justify-content-between align-items-center">
                  <div className="col-xl-5 col-lg-4">
                     <div className="social-btn justify-content-center justify-content-lg-start">
                        {/* <Link href="https://www.facebook.com/">
                           <i className="fab fa-facebook-f"></i>
                        </Link> */}
                        <Link href="https://x.com/">
                           <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                        {/* <Link href="https://instagram.com/">
                           <i className="fab fa-instagram"></i>
                        </Link>
                        <Link href="https://linkedin.com/">
                           <i className="fab fa-linkedin"></i>
                        </Link> */}
                     </div>
                  </div>
                  <div className="col-xl-7 col-lg-8 text-lg-end text-center">
                     <ul className="footer-menu-list">
                        <li>
                           <Link href={`/${countryCode}`}>
                              HOME
                           </Link>
                        </li>
                        {/* <li>
                           <Link href="#">
                              OUR PROJECTS
                           </Link>
                        </li> */}
               
                        <li>
                        <Link href={`/${countryCode}/roadmap`}>
                              ROADMAP
                           </Link>
                        </li>
                        <li>
                           <Link href={`/${countryCode}/authenticity`}>
                              AUTHENTICITY
                           </Link>
                        </li>
                        <li>
                           <Link href={`/${countryCode}/faq`}>
                              FAQ
                           </Link>

                        </li>
                        <li>
                           <Link href={`/${countryCode}/contact`}>
                              CONTACT
                           </Link>
                           
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="copyright-wrap text-center text-lg-start">
            <div className="container">
               <div className="row gy-3 justify-content-between align-items-center">
                  <div className="col-lg-6 align-self-center">
                     <p className="copyright-text">Copyright © 2024 <Link href="#">LuxuryVerse.</Link> All rights reserved.</p>
                  </div>
                  <div className="col-lg-6 text-lg-end">
                     <ul className="footer-links">
                        {/* <li>
                           <Link href="blog.html">
                              Job & Career
                           </Link>
                        </li> */}

                        <li>
                        <Link href={`/${countryCode}/service`}>
           
                              Terms and Condition
                           </Link>
                        </li>

                        <li>
                        <Link href={`/${countryCode}/privacy`}>

                             Privacy Policy
                           </Link>
                        </li>
                     </ul>
                  </div>

               </div>
            </div>
         </div>
      </footer>
   )
}

export default FooterOne
