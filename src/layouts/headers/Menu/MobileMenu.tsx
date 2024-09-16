// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState } from "react";
// // internal
// import menu_data from "../../../data/MenuData";

// const MobileMenus = ({ setIsActive }: any) => {
//     const [navTitle, setNavTitle] = useState("");
//     const currentRoute = usePathname();

//     const isMenuItemActive = (menuLink: any) => {
//         return currentRoute === menuLink;
//     };

//     const isSubMenuItemActive = (subMenuLink: any) => {
//         return currentRoute === subMenuLink;
//     };

//     const closeSidebar = () => {
//         setIsActive(false);
//     };


//     //openMobileMenu
//     const openMobileMenu = (menu: any) => {
//         if (navTitle === menu) {
//             setNavTitle("");
//         } else {
//             setNavTitle(menu);
//         }
//     };

//     return (
//         <ul className="navigation">
//             {menu_data.filter((items) => items.page === "nav_1").map((menu, i) => (
//                 <React.Fragment key={i}>
//                     {menu.has_dropdown && (
//                         <li className="menu-item-has-children">
//                             <Link href={menu.link} onClick={closeSidebar}
//                                 className={` ${(isMenuItemActive(menu.link) || (menu.sub_menus && menu.sub_menus.some((sub_m) => sub_m.link && isSubMenuItemActive(sub_m.link)))) ? "active" : ""}`}>
//                                 {menu.title}
//                             </Link>
//                             <div
//                                 className={`dropdown-btn ${navTitle === menu.title ? "open" : ""}`}
//                                 onClick={() => openMobileMenu(menu.title)} >
//                                 <i className={`${navTitle === menu.title ? "fas fa-angle-up" : "fas fa-angle-down"}`}></i>
//                             </div>
//                             {menu.sub_menus && menu.sub_menus.length > 0 && (
//                                 <ul className="sub-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
//                                     {menu.sub_menus.map((sub, index) => (
//                                         <li key={index}>
//                                             <Link href={sub.link} onClick={closeSidebar}
//                                                 className={sub.link && isSubMenuItemActive(sub.link) ? "active" : ""}>
//                                                 {sub.title}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </li>
//                     )}
//                     {!menu.has_dropdown && (
//                         <li className="menu-item-has-children">
//                             <Link onClick={closeSidebar} href={menu.link} className={`${currentRoute === menu.link ? "active" : ""}`}>
//                                 {menu.title}
//                             </Link>
//                         </li>
//                     )}
//                 </React.Fragment>
//             ))}
//         </ul>
//     );
// }

// export default MobileMenus;
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { menu_data, MenuItem, fetchCountryCode } from "../../../data/MenuData";

interface MobileMenusProps {
  setIsActive: (isActive: boolean) => void;
}

const MobileMenus: React.FC<MobileMenusProps> = ({ setIsActive }) => {
    const [navTitle, setNavTitle] = useState("");
    const countryCode = "us";
    const pathname = usePathname();

    const getFullLink = (baseLink: string) => `/${countryCode}${baseLink}`;

    const isMenuItemActive = (baseLink: string) => {
        return pathname === getFullLink(baseLink);
    };

    const isSubMenuItemActive = (subMenuLink: string) => {
        return pathname === getFullLink(subMenuLink);
    };

    const closeSidebar = () => {
        setIsActive(false);
    };

    const openMobileMenu = (menu: string) => {
        setNavTitle(prevTitle => prevTitle === menu ? "" : menu);
    };

    if (!menu_data || menu_data.length === 0) {
        return <div>No menu items available</div>;
    }

    return (
        <ul className="navigation">
            {menu_data.filter((items) => items.page === "nav_1").map((menu: MenuItem, i) => (
                <React.Fragment key={i}>
                    {menu.has_dropdown ? (
                        <li className="menu-item-has-children">
                            <Link 
                                href={getFullLink(menu.baseLink)} 
                                onClick={closeSidebar}
                                className={`${isMenuItemActive(menu.baseLink) || (menu.sub_menus && menu.sub_menus.some((sub_m) => isSubMenuItemActive(sub_m.baseLink))) ? "active" : ""}`}
                            >
                                {menu.title}
                            </Link>
                            <div
                                className={`dropdown-btn ${navTitle === menu.title ? "open" : ""}`}
                                onClick={() => openMobileMenu(menu.title)}
                            >
                                <i className={`${navTitle === menu.title ? "fas fa-angle-up" : "fas fa-angle-down"}`}></i>
                            </div>
                            {menu.sub_menus && menu.sub_menus.length > 0 && (
                                <ul className="sub-menu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                                    {menu.sub_menus.map((sub, index) => (
                                        <li key={index}>
                                            <Link 
                                                href={getFullLink(sub.baseLink)} 
                                                onClick={closeSidebar}
                                                className={isSubMenuItemActive(sub.baseLink) ? "active" : ""}
                                            >
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className="menu-item-has-children">
                            <Link 
                                onClick={closeSidebar} 
                                href={getFullLink(menu.baseLink)} 
                                className={`${isMenuItemActive(menu.baseLink) ? "active" : ""}`}
                            >
                                {menu.title}
                            </Link>
                        </li>
                    )}
                </React.Fragment>
            ))}
        </ul>
    );
}

export default MobileMenus;