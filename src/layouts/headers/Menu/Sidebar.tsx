"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Sidebar = ({ isActive, setIsActive }: any) => {

    return (
        <div className={` ${isActive ? "mobile-menu-visible" : ""}`}>
            <div className="mobile-menu">
                <nav className="menu-box">
                
      
                    <div onClick={() => setIsActive(false)} className="close-btn"><i className="fas fa-times"></i></div>
                    <div className="nav-logo">
                    <Link href={"/us"} >
                                            {/* <span style={{ fontFamily: "Times New Roman, serif", fontSize: "30px", color: "white", fontWeight: "bold" }}> */}
                                            <span style={{ fontSize: "30px", color: "white"}} >
    LuxuryVerse
</span>


          </Link>
                    </div>
                    <div className="menu-outer">
                        <MobileMenu setIsActive={setIsActive} />
                    </div>
                    <div className="social-links">
                        <ul className="clearfix list-wrap">
                            <li><a href="https://x.com/luxuryverse"><i className="fa-brands fa-x-twitter"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div onClick={() => setIsActive(false)} className="menu-backdrop"></div>
        </div>
    )
}

export default Sidebar