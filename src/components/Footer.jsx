import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import { AiOutlineInstagram,AiFillTwitterSquare,AiOutlineYoutube } from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='bg-[#343434] overflow-hidden  text-white px-5 md:px-16 flex flex-col md:flex-row justify-between gap-16 md:items-center py-16'>
        <div className="left flex-1 flex justify-between">
            <div className="about  font-normal">
                <ul>
                    <li className='font-bold text-xl mb-3'>About</li>
                   <a href=""> <li>History</li></a>
                   <a href=""> <li>Our Team</li></a>
                   <a href=""> <li>Brand guidelines</li></a>
                   <a href=""> <li>Customer services</li></a>
                   <a href=""> <li>Privacy policy</li></a>

                </ul>
            </div>
            <div className="services font-normal">
            <ul>
                    <li className='font-bold text-xl mb-3'>Services</li>
                   <a href=""> <li>History</li></a>
                   <a href=""> <li>Our Team</li></a>
                   <a href=""> <li>Brand guidelines</li></a>
                   <a href=""> <li>Customer services</li></a>
                   <a href=""> <li>Privacy policy</li></a>

                </ul>
            </div>

        </div>
        <div className="right flex-1 md:text-right flex flex-col justify-end">
            <p className=' text-[26] font-bold '>Title here</p>
            <p className='pb-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, reiciendis!</p>
            <div className=" relative ">
                <input type="text" placeholder='Your Email...' className=' py-2 w-full md:w-[32rem] focus:outline-0 px-5 bg-yellow-400 placeholder:text-white' />
                <button className='bg-cyan-500 text-white px-5 h-full absolute top-0 right-0'><AiOutlineSend/></button>
            </div>
            <div className="socials mt-5 flex justify-center md:justify-end hover:cursor-pointer space-x-3 text-[25px] ">
                    <BsFacebook className=' text-center text-white rounded-full'/>
                    <AiFillTwitterSquare className=' text-center text-white rounded-full'/>
                    <AiOutlineInstagram className=' text-center text-white rounded-full'/>
                    <AiOutlineYoutube className=' text-center text-white rounded-full'/>
                </div>
        </div>
    </div>
  )
}

export default Footer