'use client'
import {FiSearch} from 'react-icons/fi'
import {useState , useEffect} from 'react'
import Card from '@/components/Card'
import MarketCard from '@/components/MarketCard'
import {AiOutlinePlus} from 'react-icons/ai'
export default function Home() {
  const [discussion,setDiscussion]=useState(true)
  return (
    <> 
      <div className='lg:hidden  col-span-12 flex justify-between h-20 bg-blue-900 mb-10'>
            <button onClick={()=>setDiscussion(true)} className={` font-bold text-white text-base w-2/4 h-full ${discussion ?`bg-blue-950`:`bg-transparent`  }  `}>Discussion Forum</button>
            <button  onClick={()=>setDiscussion(false)}   className={` font-bold text-white text-base w-2/4 h-full ${discussion ?`bg-transparent`:`bg-blue-950`  }  `}>Market Stories</button>
          </div>
         <div className={`lg:col-span-8 col-span-12 ${discussion ? '':'hidden'}`}>
        
             <p className="px-5 text-red-500 font-bold py-5 lg:block hidden">DISSCUSSION FOURM</p>
             <div className="w-full flex flex-col sm:px-20 px-1">
               <div className='sm:px-5 px-1'>
                 <p className="font-bold">Filters</p>
                 <div className="shadow-formInputShadow p-4 mt-2 flex sm:gap-5 gap-2 rounded-lg">
                     <button className="rounded-3xl px-4 py-0.5 bg-red-700 text-white text-sm">Sector1</button>
                     <button className="rounded-3xl px-4 py-0.5 bg-blue-700 text-white text-sm">Sector1</button>
                     <button className="rounded-3xl px-4 py-0.5 bg-yellow-400 text-white text-sm">Sector1</button>
                     <div className='flex items-center justify-between bg-gray-200 p-2 ml-10  rounded-full  inner-shadow-md'>
                   <input type="text" className='w-full h-full bg-transparent border-none focus:border-none focus:outline-none ' />
                   <FiSearch className='w-5 h-5' />
               </div>
                 </div>
               </div>
               <div className='h-[30rem]   px-5 mt-5 overflow-y-auto'>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>
                  <Card/>

               </div>
             </div>
         </div>
         <div className={`lg:col-span-4 col-span-12  pb-10 relative   ${discussion ? 'lg:block hidden':''} `}>
         <p className="px-5 text-red-500 font-bold py-5 lg:block hidden">MARKET STORIES</p>
         <div className="w-full flex lg:flex-col flex-row justify-center flex-wrap gap-5  mt-5 ">
             <MarketCard card='bg-card1'/>
             <MarketCard card='bg-card3'/>
             <MarketCard card='bg-card4'/>            
                      
         </div>
         <button className='absolute bottom-5 right-20  rounded-full w-14 h-14 bg-blue-900 flex justify-center items-center text-white'><AiOutlinePlus className='w-8 h-8'/></button>
         </div>
    </>
  )
}
