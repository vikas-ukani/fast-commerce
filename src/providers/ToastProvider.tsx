"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProviderProps {
    children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
 
    return <>
        {children}
        <ToastContainer
            // toastClassName={(context) => " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"}
            // bodyClassName={() => "text-sm font-white font-med block p-3"}
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            stacked
        />
    </>
}