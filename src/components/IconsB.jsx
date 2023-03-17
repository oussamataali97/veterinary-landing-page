import React from 'react'
import icon1 from './../assets/icon.png'
import icon2 from './../assets/icon-2.png'
import icon3 from './../assets/icon-1.png'

const IconsB = () => {
  return (
    <div className='flex justify-around items-center text-white w-full bg-orange-400 py-16 images'>
        <div className="box z-[1000] flex flex-col items-center text-center">
            <img src={icon1} alt="" className='py-5 w-10 md:w-auto' />
            <p className='md:text-[26px]  font-semibold '>+37268</p>
            <p className='md:text-[25px] font-bold'>Happy Client</p>
        </div>
        <div className="box z-[1000] flex flex-col items-center text-center">
            <img src={icon2} alt="" className='py-5 w-10 md:w-auto' />
            <p className='md:text-[26px] font-semibold '>+37268</p>
            <p className='md:text-[25px] font-bold'>Happy Client</p>
        </div>
        <div className="box z-[1000] flex flex-col items-center text-center">
            <img src={icon3} alt="" className='py-5 w-10 md:w-auto' />
            <p className='md:text-[26px] font-semibold '>+37268</p>
            <p className='md:text-[25px] font-bold' >Happy Client</p>
        </div>
    </div>
  )
}

export default IconsB