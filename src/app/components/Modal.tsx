"use client"
import React, { useRef } from 'react';
import { useOnClickOutside } from "usehooks-ts";
import cn from "classnames";


interface ModalProps {
    open: boolean;
    onClose:()=>void;
    disableClickOutside?: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, children, disableClickOutside, onClose }: ModalProps) => {
    const modalClass = cn({
        "modal modal-bottom sm:modal-middle": true,
        "modal-open": open,
      });
    const ref = useRef(null);
    useOnClickOutside(ref, () => {
      if (!disableClickOutside) {
        onClose();
      }
    });
    return (
        <>
        <div className={modalClass}>
            <div className="modal-box">
                <div className="modal-box">{children}</div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn" onClick={onClose}>Close</button>
                    </form>
                </div>
            </div>
        </div> 
        </>
    );
};

export default Modal;
