import React from 'react'
import pic1 from './../assets/dsqd.png'
import pic2 from './../assets/Place Your Image Here.png'
import pic3 from './../assets/Place Your Image Here-2.png'

const Section1 = () => {
  return (
    <div className='w-full  bg-yellow-400 text-center text-white md:px-16 md:py-16 py-5'>
        <p className=' text-[60px] font-bold '>Title Here</p>
        <p className='pb-8 text-[24px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, animi.</p>
        <div className="flex space-y-6 md:space-y-0 flex-col md:flex-row justify-around items-center">
            <div className="box">
                <img src={pic1} alt="" />
                <p className='text-[25px] font-bold '>Vegeterian</p>
                <p className='max-w-[300px] mx-auto  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iusto.</p>
            </div>
            <div className="box">
                <img src={pic2} alt="" />
                <p className='text-[25px] font-bold '>Vegeterian</p>
                                <p className='max-w-[300px] mx-auto  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iusto.</p>

            </div>
            <div className="box">
                <img src={pic3} alt="" />
                <p className='text-[25px] font-bold '>Vegeterian</p>
                                <p className='max-w-[300px] mx-auto  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, iusto.</p>

            </div>
        </div>

    </div>
  )
}

export default Section1