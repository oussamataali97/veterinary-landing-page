import React, { useState } from 'react'
import logo from './../assets/logo.png'
import {AiOutlineSearch ,AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    const [toggle,setToggle]=useState(false)
    return (
        <>
        <div className='bg-yellow-500 flex justify-between items-center px-5 md:px-20 py-4'>
            <img src={logo} alt="" className='w-36 md:w-44'/>
            <ul className='hidden md:flex flex-1 ml-16 px-5 space-x-8 text-white text-lg font-semibold '>
                <li className='hover:cursor-pointer hover:underline hover:text-yellow-900 duration-300 ease-linear'>Home</li>
                <li className='hover:cursor-pointer hover:underline hover:text-yellow-900 duration-300 ease-linear'>About</li>
                <li className='hover:cursor-pointer hover:underline hover:text-yellow-900 duration-300 ease-linear'>Services</li>
                <li className='hover:cursor-pointer hover:underline hover:text-yellow-900 duration-300 ease-linear'>Contact</li>
            </ul>
            <div className="hidden md:flex items-center relative">
                <input type="text" placeholder='Search...' className=' py-2 w-72 focus:outline-0 px-5 bg-yellow-400 placeholder:text-white' />
                <button className='bg-cyan-500 text-white px-5 h-full absolute top-0 right-0'><AiOutlineSearch/></button>
            </div>
            <button className="block md:hidden text-[30px] text-white" onClick={()=>setToggle(!toggle)} >
                {toggle ? <AiOutlineClose/> : <AiOutlineMenu/>}
            </button>


        </div>
            <ul className={toggle ? 'shadow-md py-6 space-y-4 bg-gray-100 text-neutral-600  px-5   text-lg font-semibold absolute top-[70px] duration-500 ease-in w-full'  : ' w-full duration-500 ease-in-out  bg-gray-100 text-neutral-600  px-5  text-lg font-semibold absolute -top-[900px]'}>
                 <li className='hover:cursor-pointer hover:underline hover:text-yellow-900 duration-300 ease-linear'>Home</li>
                 <li className='hover:cursor-pointer hover:underline hover:text-yellow-900 duration-300 ease-linear'>About</li>
                 <li className='hover:cursor-pointer hover:underline hover:text-yellow-900 duration-300 ease-linear'>Services</li>
                 <li className='hover:cursor-pointer hover:underline hover:text-yellow-900 duration-300 ease-linear'>Contact</li>
                 <div className="relative flex flex-col mt-5">
                <input type="text" placeholder='Search...' className=' py-2 px-5 bg-yellow-400 placeholder:text-white' />
                <button className='bg-cyan-500 text-white px-5 h-full absolute top-0 right-0'><AiOutlineSearch/></button>
            </div>
            </ul>

</>
    )
}

export default Navbar