import React from 'react'
import { BsCaretRightFill } from 'react-icons/bs';
import {BiSolidUser} from 'react-icons/bi'
import {IoNotificationsSharp}  from 'react-icons/io5'
import {AiFillCaretDown , AiFillDollarCircle} from 'react-icons/ai'
import {BiMessageAltDetail} from 'react-icons/bi'

const Mb_Sidebar = () => {
  return (
    <div>
    <div className='flex justify-between px-5 items-center pb-5 border-b border-slate-50 '>
         <div className='flex items-center gap-3'>
         <BiSolidUser  className='w-5 h-5 text-white'/>
         <p className='text-sm font-semibold'>Hello, User</p>
         </div>
    <IoNotificationsSharp  className='w-5 h-5'/>
    </div>
    <div className='flex justify-between px-5  items-center  bg-blue-950 py-3 mt-5' >
      <div className='flex items-center gap-2'>
      <BiMessageAltDetail className='w-5 h-5 '/>
      <p className='text-sm font-semibold '>Disscussion Form</p>
      </div>
      <AiFillCaretDown  className='w-5 h-5 '/>

    </div>
    <div className='flex items-center mt-2 px-5 gap-2' >
    <AiFillDollarCircle className='w-5 h-5 '/>
      <p className='text-sm font-semibold '>Market Stories</p>
    </div>
    <div className='px-12 mt-4'>
      <p  className='text-sm font-semibold '>Sentiments</p>
    </div>
    <div className='px-12 mt-4'>
      <p  className='text-sm font-semibold '>Market</p>
    </div>
    <div className='px-12 mt-4'>
      <p  className='text-sm font-semibold '>Sector</p>
    </div>
    <div className='px-12 mt-4'>
      <p  className='text-sm font-semibold '>Watchlist</p>
    </div>
    <div className='px-12 mt-4'>
      <p  className='text-sm font-semibold '>Events</p>
    </div>

    </div>
  )
}

export default Mb_Sidebar
