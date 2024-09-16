// "use client"
// import UseSticky from "@/hooks/UseSticky";
// import { useState, useEffect } from "react";

// const ScrollToTop = () => {
//    const { sticky }: { sticky: boolean } = UseSticky();

//    const [showScroll, setShowScroll] = useState(false);

//    const checkScrollTop = () => {
//       if (!showScroll && window.pageYOffset > 400) {
//          setShowScroll(true);
//       } else if (showScroll && window.pageYOffset <= 400) {
//          setShowScroll(false);
//       }
//    };

//    const scrollTop = () => {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//    };

//    useEffect(() => {
//       const checkScrollTop = () => {
//          if (!showScroll && window.pageYOffset > 400) {
//             setShowScroll(true);
//          } else if (showScroll && window.pageYOffset <= 400) {
//             setShowScroll(false);
//          }
//       };

//       window.addEventListener("scroll", checkScrollTop);
//       return () => window.removeEventListener("scroll", checkScrollTop);
//    }, [checkScrollTop,showScroll]);

//    return (
//       <>
//          <button onClick={scrollTop} className={`scroll-top scroll-to-target ${sticky ? "open" : ""}`}>
//             <i className="fas fa-angle-up"></i>
//          </button>
//       </>
//    )
// }

// export default ScrollToTop;
import React, { useState, useEffect, useCallback } from "react";
// import UseSticky from "@/hooks/UseSticky";
import UseSticky from "../../hooks/UseSticky";
const ScrollToTop: React.FC = () => {
   const { sticky } = UseSticky();
   const [showScroll, setShowScroll] = useState(false);

   const checkScrollTop = useCallback(() => {
      if (!showScroll && window.pageYOffset > 400) {
         setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
         setShowScroll(false);
      }
   }, [showScroll]);

   useEffect(() => {
      window.addEventListener("scroll", checkScrollTop);
      return () => window.removeEventListener("scroll", checkScrollTop);
   }, [checkScrollTop]);

   const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <button onClick={scrollTop} className={`scroll-top scroll-to-target ${sticky ? "open" : ""}`}>
         <i className="fas fa-angle-up"></i>
      </button>
   );
};

export default ScrollToTop;