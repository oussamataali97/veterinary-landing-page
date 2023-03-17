import React from 'react'
import pic1 from './../assets/dog1.png'
import pic2 from './../assets/dog2.png'
import pic3 from './../assets/dog3.png'

const Section2 = () => {
  return (
    <div className='w-full  bg-yellow-400 text-center text-white md:px-16 md:py-16 py-5'>
        <p className=' text-[60px] font-bold '>Title Here</p>
        <p className='pb-8 text-[24px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, animi.</p>
        <div className="flex space-y-6 md:space-y-0 flex-col md:flex-row justify-around items-center">
            <div className="box ">
                <img src={pic1} alt="" className=''/>
                <p className='text-[25px] font-bold mt-4 '><span className='line-through	mr-5'>80$</span> 35$ </p>
                <button className='bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full mr-5 mt-3'>Buy Now</button>

            </div>
            <div className="box  ">
                <img src={pic2} alt="" />
                <p className='text-[25px] font-bold mt-4 '><span className='line-through	mr-5'>60$</span> 35$ </p>
                <button className='bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full mr-5 mt-3'>Buy Now</button>

            </div>
            <div className="box ">
                <img src={pic3} alt="" />
                <p className='text-[25px] font-bold mt-4 '><span className='line-through	mr-5'>90$</span> 35$ </p>
                <button className='bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-2 rounded-full mr-5 mt-3'>Buy Now</button>

            </div>
        </div>

    </div>
  )
}

export default Section2