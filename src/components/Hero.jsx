import React from 'react'
import dog from './../assets/Place Your Image Here (Double Click to Edit).png'
const Hero = () => {
    return (
        <div className='w-full md:h-screen min-h-[500px] bg-yellow-400 flex flex-col justify-center md:flex-row md:justify-around px-6 md:py-5 text-white items-center mb-5 md:px-16'>
            <div className="text md:max-w-[600px] ">
                <p className=' md:text-[64px] text-[44px] font-bold md:leading-[80px]'>First I wanted to be a veneterian</p>
                <p className=' my-8 text-[20px] font-normal leading-[30px] md:max-w-[480px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Optio esse ab in at corrupti, iste quas
                    quidem asperiores architecto ipsa?
                </p>
                <div className="buttons">
                <button className='bg-cyan-600 text-white px-6  py-3 rounded-md mr-5'>Contact Us</button>
                <button className='outline outline-1 text-white px-6 py-3 rounded-md mr-5'>Our Services</button>
            </div>
            </div>
            <div className="mg ">
                <img src={dog} alt="" className=' hidden md:block max-w-[300px] ' />
            </div>

        </div>
    )
}

export default Hero