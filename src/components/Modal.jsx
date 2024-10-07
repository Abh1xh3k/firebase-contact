import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {createPortal} from 'react-dom'

const modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className=" m-auto z-50 relative min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end ">
              <IoMdCloseCircleOutline onClick={onClose} className=" relative  text-2xl  " />
            </div>
            {children}
          </div>
          <div   onClick={onClose} className="   absolute top-0 backdrop-blur z-40 h-screen w-screen"/>
        </>
      )}
    </>
 , document.getElementById("modal-root")
 );
};

export default modal;
