interface DataType {
    id: number;
    sub_title: string;
    title: string;
    desc: string;
 }[];
 
 const hero_data: DataType[] = [
    {
       id: 1,
       sub_title: "Product",
       title: "Luxury Brands",
       desc: "LuxuryVerse has direct access to the world's top luxury brands. We have built our industry relationships over decades, ensuring that we have the best styles at the prices. Our relationships and our reputation are second to none",
    },
    {
       id: 2,
       sub_title: "Exclusive Drops",
       title: "Exclusive Drops",
       desc: "Each week, LuxuryVerse releases a limited selection of luxury goods to our members. We announce these drops one day in advance on X, releasing goods on a first come first serve basis exclusive to our members. Over time, LuxuryVerse will move to daily drops and additional membership levels, enabling earlier access or deeper discounts.",
    },
    {
       id: 3,
       sub_title: "Full Authentication",
       title: "Authentic Goods",
       desc: "LuxuryVerse goods are 100% authentic and guaranteed on the blockchain. Our goods and services are also supported by the Authentication Council, a group of former FBI and Interpol agents, dedicated to ensuring confidence and trust throughout the entire experience.",
    },
 ];
 
 export default hero_data;