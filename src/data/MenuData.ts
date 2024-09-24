// import { getCountryCode, getRegionMap } from "@/middleware";

  
// const fetchData = async () => {
//         try {
//           const regionMap = await getRegionMap();
//           if (regionMap) {
//             const countryCode = await getCountryCode(regionMap);
//           }
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       };
  


// interface MenuItem {
//     id: number;
//     page:string;
//     title: string;
//     link: string;
//     has_dropdown: boolean;
//     sub_menus?: {
//         link: string;
//         title: string;
//     }[];
// }[];

// const menu_data: MenuItem[] = [
    
//     {
//         id: 1,
//         page:"nav_1",
//         has_dropdown: false,
//         title: "Home",
//         link: "/#",
        
//     },
//     {
//         id: 2,
//         page:"nav_1",
//         has_dropdown: false,
//         title: "RWA",
//         link: "/rwa",
//     },
//     {
//         id: 3,
//         page:"nav_1",
//         has_dropdown: false,
//         title: "Whitepaper",
//         link: "/roadmap",
//     },
//     {
//         id: 4,
//         page:"nav_1",
//         has_dropdown: false,
//         title: "Authenticity",
//         link: "/authenticity",
//     },
//     {
//         id: 5,
//         page:"nav_1",
//         has_dropdown: false,
//         title: "How to Buy",
//         link: "/buy",
//     } ,
//     {
//         id: 6,
//         page:"nav_1",
//         has_dropdown: false,
//         title: "Team",
//         link: "/team",
//     }, 
 
//     {
//         id: 1,
//         page:"nav_2",
//         has_dropdown: true,
//         title: "Home",
//         link: "#",
//         sub_menus: [
//             { link: "/", title: "ICO Investment" },
//             { link: "/home-two", title: "Blockchain", },
//         ],
//     },
//     {
//         id: 2,
//         page:"nav_2",
//         has_dropdown: false,
//         title: "Why Blockchain",
//         link: "/home-two/#blockchain",
//     },
//     {
//         id: 3,
//         page:"nav_2",
//         has_dropdown: false,
//         title: "Feature",
//         link: "/home-two/#feature",
//     },
//     {
//         id: 4,
//         page:"nav_2",
//         has_dropdown: true,
//         title: "Blog",
//         link: "#",
//         sub_menus: [
//             { link: "/blog", title: "Our Blog" },
//             { link: "/blog-details", title: "Blog-Details", },
//         ],
//     },
//     {
//         id: 5,
//         page:"nav_2",
//         has_dropdown: false,
//         title: "Contact",
//         link: "/contact",
//     },
// ];
// export default menu_data;
// import { getCountryCode, getRegionMap } from "@/middleware";
import { getCountryCode, getRegionMap } from "../middleware";
interface MenuItem {
  id: number;
  page: string;
  title: string;
  baseLink: string;
  has_dropdown: boolean;
  sub_menus?: {
    baseLink: string;
    title: string;
  }[];
}

const createMenuItem = (
  id: number,
  page: string,
  title: string,
  baseLink: string,
  has_dropdown: boolean,
  sub_menus?: { baseLink: string; title: string }[]
): MenuItem => ({
  id,
  page,
  title,
  baseLink,
  has_dropdown,
  sub_menus,
});

const fetchCountryCode = async (request: any): Promise<string> => {
  try {
    const regionMap = await getRegionMap();
    if (regionMap) {
      const countryCode = await getCountryCode(request, regionMap);
      return countryCode.toLowerCase();
    }
    return 'us'; // Default to empty string if no country code is found
  } catch (error) {
    console.error("Error fetching country code:", error);
    return 'us'; // Return empty string in case of error
  }
};

const menu_data: MenuItem[] = [
  createMenuItem(1, "nav_1", "Home", "/", false),
  createMenuItem(5, "nav_1", "How to Buy", "/buy", false),
  createMenuItem(3, "nav_1", "Roadmap", "/roadmap", false),
  createMenuItem(4, "nav_1", "About Us", "/authenticity", false),
  createMenuItem(2, "nav_1", "RWA", "/rwa", false),
  // createMenuItem(6, "nav_1", "Team", "/team", false),
  createMenuItem(7, "nav_1", "Shop", "/store", false), 
  // createMenuItem(8, "nav_1", "Cart", "/cart", false), 
  
  
  createMenuItem(1, "nav_2", "Home", "", true, [
    { baseLink: "/", title: "ICO Investment" },
    { baseLink: "/home-two", title: "Blockchain" },
  ]),
  createMenuItem(2, "nav_2", "Why Blockchain", "/home-two/#blockchain", false),
  createMenuItem(3, "nav_2", "Feature", "/home-two/#feature", false),
  createMenuItem(4, "nav_2", "Blog", "", true, [
    { baseLink: "/blog", title: "Our Blog" },
    { baseLink: "/blog-details", title: "Blog-Details" },
  ]),
  createMenuItem(5, "nav_2", "Contact", "/contact", false),

];
// Export values
export { menu_data, fetchCountryCode };

// Export types
export type { MenuItem };