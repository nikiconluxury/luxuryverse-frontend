"use client";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { animationCreate } from "../utils/utils";
import ScrollToTop from "../component/common/ScrollToTop";

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: any) => {
    useEffect(() => {
        // animation
        const timer = setTimeout(() => {
            animationCreate();
        }, 100);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div>

        {children}
        <ScrollToTop />
        {/* <ToastContainer position="top-center" /> */}
        <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ width: "320px" }} 
        />
    </div>)
}

export default Wrapper
