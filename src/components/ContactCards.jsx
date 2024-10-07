import React from 'react'
import { FaTrashCan } from 'react-icons/fa6'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { MdEditSquare } from 'react-icons/md'

const ContactCards = ({contacts}) => {
  return (
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
                  <MdEditSquare />
                <FaTrashCan  className=''/> 
                </div>
            </div>
  )
}

export default ContactCards