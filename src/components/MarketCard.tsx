import React from 'react'

type TProps = {
  card: string;
};

const MarketCard = ({card}:TProps) => {
  return (
    <div className={`w-72 h-48 overflow-hidden rounded-lg relative ${card} bg-cover `}>
        <div className='backdrop-brightness-50 w-full h-full flex justify-center items-end px-10'>
               <p className='text-sm font-semibold tracking-wide	 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, rem.</p>
        </div>
    </div>
  )
}

export default MarketCard
