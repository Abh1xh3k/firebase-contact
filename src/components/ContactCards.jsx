import { deleteDoc, doc} from 'firebase/firestore'
import React, { useState } from 'react'
import { FaTrashCan } from 'react-icons/fa6'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { MdEditSquare } from 'react-icons/md'
import { db } from '../config/firebase'
import AddAndupdate from './AddAndupdate'
import { toast } from 'react-toastify'


const ContactCards = ({contacts}) => {
  
  const[isOpen,setopen]=useState(false);
  
  const onOpen=()=>{
    // console.log(true)
    setopen(true);
  }
  const onClose=()=>{
    setopen(false);
  }

   const deleteContact=async(id)=>{
    try {
      await deleteDoc(doc(db,"contacts" , id));
      toast.success("Contact Deleted Sucessfully")
    } catch (error) {
        console.log(error)
    }
   } 



  return (
    <>
        <div key={contacts.id} className=' p-2 rounded-lg my-2 bg-yellow  flex justify-around items-center'>
              <div className='flex gap-1'>
              <HiOutlineUserCircle className='text-4xl '/>
              <div className=' '>
                <h2 className='font-medium'>{contacts.name}
                </h2>
                <p className='text-sm'>{contacts.email}</p>
              </div>
              </div>
              <div className='cursor-pointer text-2xl'> 
                  <MdEditSquare onClick={onOpen} />
                <FaTrashCan  onClick={()=>{
                  deleteContact(contacts.id)} }className=''/> 
                </div>
            </div>
            <AddAndupdate  
            contact={contacts}
            isUpdate isOpen={isOpen} onClose={onClose}
             className='cursor-pointer'/>
    </>
   
  )
}

export default ContactCards