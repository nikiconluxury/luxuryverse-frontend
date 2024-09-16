"use client"
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import UseSticky from "../../hooks/UseSticky";
import Image from "next/image";
import NavMenu from "./Menu/NavMenu";
import Sidebar from "./Menu/Sidebar";
import HeaderOffcanvas from "./Menu/HeaderOffcanvas";
import logo_1 from "@/assets/img/logo/logo.png";
import { loadEnvConfig } from '@next/env'
// import { getCountryCode, getRegionMap } from "../../middleware";
import { ConnectButton2 } from "@modules/layout/components/connect-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { Suspense } from "react"

import { useWeb3Modal } from '@web3modal/ethers/react'
const HeaderOne: React.FC = () => {
     const { open, close } = useWeb3Modal()


    const { sticky } = UseSticky();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [offCanvas, setOffCanvas] = useState<boolean>(false);

    // const [loggedIn, setLoggedIn] = useState(false); 

    // const [countryCode, setCountryCode] = useState('us');
  
    // useEffect(() => {
    //     const fetchData = async (request: any): Promise<string> => {
    //         try {
    //           const regionMap = await getRegionMap();
    //           if (regionMap) {
    //             const countryCode = await getCountryCode(request, regionMap);
    //             return countryCode.toLowerCase();
    //           }
    //           return 'us'; // Default to empty string if no country code is found
    //         } catch (error) {
    //           console.error("Error fetching country code:", error);
    //           return 'us'; // Return empty string in case of error
    //         }
    //       };
  
    //   fetchData();
    // }, []); // Empty dependency array means this effect runs once on mount
    const countryCode = 'us'
    return (
        <>
            <header id="header" className="header-layout1">
                <div id="sticky-header" className={`menu-area transparent-header ${sticky ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                
                                <div className="menu-wrap">
                                    <nav className="menu-nav">
                                    <div onClick={() => setIsActive(true)} className="mobile-nav-toggler"><i className="fas fa-bars"></i>
                                        
                                        </div>  
                                    
                                        {/* <w3m-button isActive={isActive}
  balance="hide"
  size="sm"
  label="Connect"
  loadingLabel="Connecting..."
></w3m-button> */}
                                        {/* //if isActive is true, then the Sidebar component will be rendered */}




                                            {/* <Link href="/"><Image src={logo_1} alt="Logo" /></Link> */}
                                            <Link href={`/${countryCode}`} >
                                            {/* <span style={{ fontFamily: "Times New Roman, serif", fontSize: "30px", color: "white", fontWeight: "bold" }}> */}
                                            <span style={{ fontSize: "30px", color: "white"}} >
    LuxuryVerse
</span>


          </Link>
                            
                                        <div onClick={() => { open();}} className="mobile-nav-toggler" style={{backgroundColor:'#4E67E8'}}>
                                            <div className="text-white">
                                        <i className="fas fa-wallet"></i>

                                        </div>  
                                        </div>  
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <NavMenu />
                                        </div>

                                        
                                     <div className="header-action">
                                        
                                            <ul className="list-wrap">
                                                
                                                  {/*  <li>
                                                    <div className="dropdown-link">
                                                        <Link className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">ENG</Link>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                                            <li>
                                                                <Link href="#">GER</Link>
                                                                <Link href="#">FREN</Link>
                                                                <Link href="#">ARAB</Link>
                                                                <Link href="#">LAT</Link>
                                                                <Link href="#">SPA</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>*/}
                                                {/* <li>            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense> */}


    <li className="h-full">
              <CartButton />
            </li>
    {/* </li>                                        */}
    <li className="header-login">
              <ConnectButton2 />
            </li>
                                                {/* <Link className="btn2" href={`/${countryCode}/register`}>LOGIN</Link></li>  */}


                                            </ul>
                      
                               
                                        </div> 
                                        


                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar style={false} isActive={isActive} setIsActive={setIsActive} />
            <HeaderOffcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
        </>
    );
}

export default HeaderOne;
