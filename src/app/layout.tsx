'use client'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Mb_Sidebar from '@/components/Mb_Sidebar'
import { BsCaretRightFill } from 'react-icons/bs'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [toggle, setToggle] = useState(true)
  const [mdtoggle, setMdtoggle] = useState(false)
  const [visible,setVisible]=useState(false)
  const router=useRouter()
  useEffect(()=>{
             if(window.innerWidth < 1264){
              setToggle(false)
             }
             else{
              setToggle(true)
             }
             if(window.innerWidth < 1024){
              setVisible(true)
             }
             else{
              setVisible(false)
             }

  },[router.isReady])
  return (
    <html lang="en">
      <body className={`${inter.className} w-auto overflow-x-hidden`}>
        <Header />
        <div className='h-full w-full overflow-x-hidden grid grid-cols-12 relative'>
         <div className={` ${toggle ? `col-span-2 ` : `hidden`} z-20  bg-blue-900 relative  py-5  flex flex-col text-white`}>
            <Sidebar />
            <button onClick={()=>setToggle(!toggle)} className='absolute bg-blue-900 top-2/4 left-[100%] h-20 w-5  rounded-e-md  flex items-center'>
              <BsCaretRightFill className='w-5 h-5 text-white' />
            </button>
          </div>
          <div className={`bg-blue-900 shadow-lg py-5 absolute h-full z-20   flex-col text-white ${mdtoggle ? `flex ` : `hidden`}`}>
              <Mb_Sidebar/>
              <button onClick={()=>setMdtoggle(!mdtoggle)} className='absolute bg-blue-900 top-2/4 left-[100%] h-20 w-5  rounded-e-md  flex items-center'>
              <BsCaretRightFill className='w-5 h-5 text-white' />
            </button>
          </div>
          <button  onClick={()=>{
            if(!visible){
              setToggle(!toggle)
            }
            else{
              setMdtoggle(!mdtoggle)
            }
          }} className='z-10 absolute bg-blue-900 top-2/4 left-0 h-20 w-5  rounded-e-md  flex items-center'>
              <BsCaretRightFill className='w-5 h-5 text-white' />
            </button>
          <div className={`${toggle ? `col-span-10` : `col-span-12`} grid grid-cols-12`}>
            {children}
          </div>
        </div>


      </body>
    </html>
  )
}
