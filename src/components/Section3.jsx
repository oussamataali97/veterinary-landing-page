import React from 'react'
import pic1 from './../assets/nurce1.png'
import pic2 from './../assets/nurce2.png'
import { AiOutlineInstagram,AiFillTwitterSquare,AiOutlineYoutube } from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import pic3 from './../assets/nurce3.png'

const Section3 = () => {
  return (
    <div className='w-full   text-center text-neutral-800 md:px-16 md:py-16 py-5'>
        <p className=' text-[60px] font-bold '>The vetcare team</p>
        <p className='pb-8 text-[24px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, animi.</p>
        <div className="flex space-y-6 md:space-y-0 flex-col md:flex-row justify-around items-center">
            <div className="box shadow-md pb-5">
                <img src={pic1} alt="" />
                <p className='text-[20px] font-bold mt-4 '>Sherine Mulien </p>
                <p className='font-normal'>Veterian</p>
                <div className="socials flex justify-center space-x-3 text-[25px] items-center">
                    <BsFacebook className='bg-[#daac00] w-8 h-8 p-1   text-center text-white rounded-full'/>
                    <AiFillTwitterSquare className='bg-[#daac00] w-8 h-8 p-1  text-center text-white rounded-full'/>
                    <AiOutlineInstagram className='bg-[#daac00] w-8 h-8 p-1  text-center text-white rounded-full'/>
                    <AiOutlineYoutube className='bg-[#daac00] w-8 h-8 p-1  text-center text-white rounded-full'/>
                </div>

            </div>
            <div className="box shadow-md pb-5">
                <img src={pic2} alt="" />
                <p className='text-[20px] font-bold mt-4 '>Maria Sharapova </p>
                <p className='font-normal'>R&H </p>
                <div className="socials flex justify-center space-x-3 text-[25px] items-center">
                    <BsFacebook className='bg-[#daac00] w-8 h-8 p-1 text-center text-white rounded-full'/>
                    <AiFillTwitterSquare className='bg-[#daac00] w-8 h-8 p-1 text-center text-white rounded-full'/>
                    <AiOutlineInstagram className='bg-[#daac00] w-8 h-8 p-1 text-center text-white rounded-full'/>
                    <AiOutlineYoutube className='bg-[#daac00] w-8 h-8 p-1 text-center text-white rounded-full'/>
                </div>

            </div>
            <div className="box shadow-md pb-5">
                <img src={pic3} alt="" />
                <p className='text-[20px] font-bold mt-4 '>Alexia putellas </p>
                <p className='font-normal'>Veterian</p>
                <div className="socials flex justify-center space-x-3 text-[25px] items-center">
                    <BsFacebook className='bg-[#daac00] w-8 h-8 p-1 text-center text-white rounded-full'/>
                    <AiFillTwitterSquare className='bg-[#daac00] w-8 h-8 p-1 text-center text-white rounded-full'/>
                    <AiOutlineInstagram className='bg-[#daac00] w-8 h-8 p-1 text-center text-white rounded-full'/>
                    <AiOutlineYoutube className='bg-[#daac00] w-8 h-8 p-1 text-center text-white rounded-full'/>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Section3