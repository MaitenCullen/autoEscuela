
"use client"
import React, { useState } from "react";
import Modal from "./Modal";

interface CardProps {
    id: number;
    title: string;
    description: string;
    button: string;
    modal:string;
}

export default function Card(props: CardProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const handleToggle = () => setModalOpen((prev) => !prev);

    // Función para cerrar el modal
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="card bg-transparent shadow-xl m-2.5 sm:w-48 md:w-80 lg:w-96 h-96">
            <figure className="h-60"><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body ">
                <h2 className="card-title text-red font-mono">{props.title}</h2>
                <p className="text-black">{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-green bg-green text-white border-transparent" onClick={handleToggle}>{props.button}</button>
                </div>
            </div>
            <Modal open={modalOpen} onClose={closeModal}>
                <h3 className="font-bold text-lg">
                       {props.title}
                </h3>
                <p className="py-4">
                {props.modal}
                </p>
            </Modal>
        </div>
    );
}
