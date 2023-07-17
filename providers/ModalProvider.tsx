"use client";

import { useState, useEffect } from "react";

import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

   // ensuring that none of the modals can be seen or opened during server-side rendering 
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null; 
    }

    return (
        <>
      <AuthModal />
        </>
    );
    

}

export default ModalProvider; 

