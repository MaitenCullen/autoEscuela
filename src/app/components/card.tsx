
"use client"
import React, { useState } from "react";
import Modal from "./Modal";

interface CardProps {
    id: number;
    title: string;
    description: string;
    button: string;
}

export default function Card(props: CardProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const handleToggle = () => setModalOpen((prev) => !prev);

    // Función para cerrar el modal
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleToggle}>{props.button}</button>
                </div>
            </div>
            <Modal open={modalOpen} onClose={closeModal}>
                <h3 className="font-bold text-lg">
                        Congratulations random Internet user!
                </h3>
                <p className="py-4">
                You havve been selected for a chance to get one year of subscription
                to use Wikipedia for free!
                </p>
            </Modal>
        </div>
    );
}
