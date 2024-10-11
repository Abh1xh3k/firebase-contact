import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import {createPortal} from 'react-dom'

const modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="z-50 left-0 right-0 ml-auto mr-auto   absolute top-10  min-h-[200px] max-w-[80%] bg-white p-4">
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
 

// position: absolute;
// left: 0;
// right: 0;
// margin-left: auto;
// margin-right: auto;
// width: 100px;