import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { db } from './config/firebase';
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaTrashCan } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import ContactCards from './components/ContactCards';
// import Modal from './components/Modal';
import AddAndupdate from './components/AddAndupdate';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [contacts,setcontacts]=useState([]);

  const[isOpen,setopen]=useState(false);
  
  const onOpen=()=>{
    // console.log(true)
    setopen(true);
  }
  const onClose=()=>{
    setopen(false);
  }

useEffect(()=>{
  const getContacts=async()=>{
    try {
      const contactsRef=collection(db,"contacts");
      // const contactsSnapshot=await getDocs(contactsRef);

     onSnapshot(contactsRef,(snapshot)=>{
      const contactList=snapshot.docs.map((doc)=>{
        return {
         id:doc.id,
       ...doc.data()
     }
     })
     setcontacts(contactList);
     return contactList;
     })

      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
    getContacts();
},[]);


const filterContacts=(e)=>{
  const value=e.target.value;
  const contactsRef=collection(db,"contacts");
  // const contactsSnapshot=await getDocs(contactsRef);

 onSnapshot(contactsRef,(snapshot)=>{
  const contactList=snapshot.docs.map((doc)=>{
    return {
     id:doc.id,
   ...doc.data()
 }
 })


 const filterContacts=contactList.filter(contacts=>contacts.name.toLowerCase().includes(value.toLowerCase()))
 setcontacts(filterContacts);
 return filterContacts;
 })

}

  return (
    <>
       <div className='max-w-[370px] mx-auto px-4' >
          <Navbar/>
         <div className='flex gap-2'>
         <div className=' relative flex items-center flex-grow'>
          <FiSearch  className=' m-1 text-3xl  absolute  '/>
            <input 
              onChange={filterContacts}
              type="text" 
             className='  pl-9 flex-grow h-10 border bg-transparent border-black rounded-md'/>
          </div>
          <FaPlusCircle 
          onClick={onOpen}
           className='text-3xl m-1  cursor-pointer' />
         </div>
         <div>
          {
            contacts.map(contacts=>
              <ContactCards  key={contacts.id} contacts={contacts}/>
            )
          }
         </div>
       </div>
      <AddAndupdate 
       onClose={onClose} isOpen={isOpen}/>
       <ToastContainer />
    </>
  )
}

export default App


