"use client";

import { useState, useEffect } from "react";

import Modal from "@/components/Modal";

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
       <Modal 
       title="Test Modal"
       description="Test Description"
       isOpen
       onChange={() => {}}
       >
        Test Children
        </Modal>
        </>
    );
    

}

export default ModalProvider; 

