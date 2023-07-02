import React from 'react'
import { FiSearch } from 'react-icons/fi';
import {BiSolidUserCircle} from 'react-icons/bi'
const Header = () => {
  return (
    <div>
    <nav>
    <div className="p-2 flex justify-between items-center">
            <div className='flex items-center justify-between md:w-2/4 w-full  '>
               <div className='w-20 h-10 overflow-hidden'>
                <img src="/cognizantpng.png" className='w-full h-full bg-cover' alt="logo" />
               </div>
               <div className='flex items-center justify-between bg-gray-200 p-2 md:w-full w-fit md:ml-10 ml-0 rounded-md  inner-shadow-md'>
                   <input type="text" className='w-full h-full bg-transparent border-none focus:border-none focus:outline-none ' />
                   <FiSearch className='w-5 h-5' />
               </div>
               <BiSolidUserCircle className='w-8 h-8 md:hidden visible'/>
            </div>
            <div  className=' gap-10 items-center md:flex hidden'>
              <a href='#' className='font-semibold text-md'>Contact Us</a>
              <button className="bg-transparent   py-2 px-4 border border-gray-500 rounded">
    Sign up
  </button>
  <button className="bg-transparent     py-2 px-4 border border-gray-500 rounded">
    Sign in
  </button>
            </div>
  
    </div>
  </nav>
  <div  className='bg-black px-3 py-2 flex justify-between text-xs  overflow-hidden'>
        <p className='text-white'>.50</p>
        <p className='text-red-700'>0.21%</p>
        <p className='text-white'>NIFTY BANK</p>
        <p className='text-white'>4324</p>
        <p className='text-green-700'>0.1%</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
        <p className='text-white'>50</p>
  
  </div>
  <p className='px-3 py-2 text-red-500 font-semibold text-lg bg-gray-200 '>
  FEATURED COMPANY 
  </p>

  <div className='bg-blue-100 py-3  flex justify-around'>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
       <div className='w-24 h-12 overflow-hidden'>
        <img className='w-full h-full bg-contain' src='/cognizantpng.png' alt="" />
       </div>
  </div>
  </div>
  )
}

export default Header
