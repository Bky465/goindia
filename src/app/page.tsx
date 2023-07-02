import {FiSearch} from 'react-icons/fi'
import Card from '@/components/Card'
import MarketCard from '@/components/MarketCard'
import {AiOutlinePlus} from 'react-icons/ai'
export default function Home() {
  return (
    <> 
         <div className="col-span-8">
             <p className="px-5 text-red-500 font-bold py-5">DISSCUSSION FOURM</p>
             <div className="w-full flex flex-col px-20">
               <div className='px-5'>
                 <p className="font-bold">Filters</p>
                 <div className="shadow-formInputShadow p-4 mt-2 flex gap-5 rounded-lg">
                     <button className="rounded-3xl px-4 py-0.5 bg-red-700 text-white text-sm">Sector1</button>
                     <button className="rounded-3xl px-4 py-0.5 bg-blue-700 text-white text-sm">Sector1</button>
                     <button className="rounded-3xl px-4 py-0.5 bg-yellow-400 text-white text-sm">Sector1</button>
                     <div className='flex items-center justify-between bg-gray-200 p-2 ml-10  rounded-full  inner-shadow-md'>
                   <input type="text" className='w-full h-full bg-transparent border-none focus:border-none focus:outline-none ' />
                   <FiSearch className='w-5 h-5' />
               </div>
                 </div>
               </div>
               <div className='h-[30rem]   px-5 mt-2 overflow-y-auto'>
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
         <div className="col-span-4 pb-10 relative ">
         <p className="px-5 text-red-500 font-bold py-5">MARKET STORIES</p>
         <div className="w-full flex gap-5 flex-col mt-5 ">
             <MarketCard card='bg-card1'/>
             <MarketCard card='bg-card3'/>
             <MarketCard card='bg-card4'/>            
         </div>
         <button className='absolute bottom-5 right-20  rounded-full w-14 h-14 bg-blue-900 flex justify-center items-center text-white'><AiOutlinePlus className='w-8 h-8'/></button>
         </div>
    </>
  )
}
