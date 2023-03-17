import React from 'react'

import { AiOutlineInstagram, AiFillTwitterSquare, AiOutlineYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import pic1 from './../assets/dsqd.png'
import pic2 from './../assets/Place Your Image Here.png'
import pic3 from './../assets/Place Your Image Here-2.png'

const Section4 = () => {
    return (
        <div className='w-full text-neutral-800 px-4 py-8 md:px-16 md:py-16'>
            <p className=' md:text-[60px] text-[40px] font-bold  text-center'>Recent Posts</p>
            <p className='pb-8 text-[24px] font-normal text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, animi.</p>
            <div className="flex space-y-6 md:space-y-0 flex-col gap-8 md:flex-row justify-around items-center">
                <div className="box shadow-lg order-3">
                    <img src={pic1} alt="" className='w-full'/>
                    <div className="p-5">
                    <p className='text-[20px] font-bold  '>As a veterinarian and lover of animals </p>
                    <p className='font-semibold pb-4 pt-2 text-cyan-500'>FEBRUARY 11, 2020</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        perspiciatis harum, praesentium dolor perferendis quia!
                    </p>
                    <button href="#" className='font-semibold  pt-5 text-cyan-500 hover:text-cyan-900 duration-300 ease-in underline'>Read more +</button>
                    </div>


                </div>
                <div className="box shadow-lg order-3">
                    <img src={pic3} alt="" className='w-full'/>
                    <div className="p-5">
                    <p className='text-[20px] font-bold  '>As a veterinarian and lover of animals </p>
                    <p className='font-semibold pb-4 pt-2 text-cyan-500'>FEBRUARY 11, 2020</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        perspiciatis harum, praesentium dolor perferendis quia!
                    </p>
                    <button href="#" className='font-semibold  pt-5 text-cyan-500 hover:text-cyan-900 duration-300 ease-in underline'>Read more +</button>
                    </div>


                </div>     <div className="box shadow-lg order-3">
                    <img src={pic2} alt="" className='w-full'/>
                    <div className="p-5">
                    <p className='text-[20px] font-bold  '>As a veterinarian and lover of animals </p>
                    <p className='font-semibold pb-4 pt-2 text-cyan-500'>FEBRUARY 11, 2020</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        perspiciatis harum, praesentium dolor perferendis quia!
                    </p>
                    <button href="#" className='font-semibold  pt-5 text-cyan-500 hover:text-cyan-900 duration-300 ease-in underline'>Read more +</button>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Section4