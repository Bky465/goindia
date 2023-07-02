import React from 'react'
import {FcLike} from 'react-icons/fc'
import {AiOutlineEye , AiOutlineShareAlt} from 'react-icons/ai'
import {BiMessageRounded , BiSolidUserCircle} from 'react-icons/bi'


const Card = () => {
  return (
    <div className='shadow-formInputShadow rounded-md p-4 mt-5'>
        <p className='text-xs font-bold text-blue-700 text-right'>2 min ago</p>
        <div className='flex justify-center'>
            <img className='w-26 h-14 bg-cover' src="https://companieslogo.com/img/orig/INFIBEAM.NS_BIG-a78aabf3.png?t=1604232063" alt="" />
        </div>
        <div className='flex flex-col gap-y-4 mt-5'>
              <div className='flex gap-4 items-center'>
                <BiSolidUserCircle className='w-10 h-10' />
                <p className='text-xs font-bold '>Lorem Ipsum</p>
                <button className='rounded-full bg-red-700 text-white px-2 py-0.5 font-light text-xs'>Sector 1</button>
              </div>
              <div className='flex pl-14 pr-20  text-xs font-semibold text-justify'>Lorem ipsum dolor sit,Lorem ipsum dolor sit amet consec Lorem ipsum dolor sit amet consec Lorem ipsum dolor sit amet consezc
              </div>
              <div className='flex pl-14 pr-20 gap-10'>
                     <div className='flex gap-2'> 
                         <FcLike className='w-4 h-4'/>
                         <span className='text-xs font-bold '>2k</span>
                     </div>
                     <div className='flex gap-2'> 
                         <AiOutlineEye className='w-4 h-4'/>
                         <span className='text-xs font-bold '>2k</span>
                     </div>
                     <div className='flex gap-2'> 
                         <BiMessageRounded className='w-4 h-4'/>
                         <span className='text-xs font-bold '>2k</span>
                     </div>
                     <div className='flex gap-2'> 
                         <AiOutlineShareAlt className='w-4 h-4'/>
                         <span className='text-xs font-bold '>2k</span>
                     </div>
              </div>
        </div>
    </div>
  )
}

export default Card
