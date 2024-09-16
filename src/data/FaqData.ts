interface DataType {
   id: number;
   page: string;
   title: string;
   desc: string;
 }[];
 
 const faq_data: DataType[] = [
   {
     id: 1,
     page: "home_1",
     title: "What types of luxury goods do you offer?",
     desc: "We offer a wide range of luxury goods, including designer handbags, watches, jewelry, apparel, and accessories from the world's most prestigious brands.",
   },
   {
     id: 2,
     page: "home_1",
     title: "Are the items authentic?",
     desc: "Yes, all our items are 100% authentic. We work directly with the brands and authorized dealers to ensure the authenticity of our products.",
   },
   {
     id: 3,
     page: "home_1",
     title: "Do you offer international shipping?",
     desc: "Yes, we offer international shipping to most countries. Shipping fees and delivery times vary based on the destination.",
   },
   {
      id: 4,
      page: "home_1",
      title: "Do you offer financing options?",
      desc: "Yes, we offer financing options through our partner financial institutions. You can select this option at checkout to learn more about available plans.",
    },
   {
     id: 5,
     page: "home_1",
     title: "How can I track my order?",
     desc: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's site.",
   },
   {
     id: 7,
     page: "home_1",
     title: "How can I contact customer service?",
     desc: "You can contact our customer service team via email at support@luxuryshop.com or by phone at 1-800-123-4567. Our team is available Monday to Friday from 9 AM to 6 PM.",
   },
   {
     id: 2,
     page: "home_2",
     title: "Can I customize my order?",
     desc: "Certain items can be customized or personalized. Please contact our customer service team to discuss customization options and associated costs.",
   },
   {
     id: 3,
     page: "home_2",
     title: "What is your warranty policy?",
     desc: "We offer a one-year warranty on most items. This covers manufacturing defects but does not include damage caused by misuse or normal wear and tear.",
   },
   {
     id: 4,
     page: "home_2",
     title: "How do I care for my luxury items?",
     desc: "Each item comes with specific care instructions. We recommend following these instructions to maintain the quality and longevity of your luxury goods.",
   },
   {
     id: 5,
     page: "home_2",
     title: "Do you have a loyalty program?",
     desc: "Yes, we have a loyalty program that offers exclusive benefits and rewards to our customers. Sign up on our website to start earning points with every purchase.",
   },
 ];
 
 export default faq_data;
 