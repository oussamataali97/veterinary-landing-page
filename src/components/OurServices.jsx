import React from 'react'
import placedog from './../assets/place dog.png'
import {AiFillPlayCircle} from 'react-icons/ai'

const OurServices = () => {
    return (
        <div className=' flex md:justify-around flex-col justify-center md:flex-row items-center px-5 md:px-20 space-y-5 md:space-y-0 py-16'>
            <div className="text max-w-[600px] ">
                <p className=' text-[45px] text-neutral-800 font-bold leading-[50px]'>As a veneterian and lover of animals .</p>
                <p className=' my-8 text-[20px] font-normal leading-[30px] max-w-[480px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Optio esse ab in at corrupti, iste quas
                    quidem asperiores architecto ipsa?
                </p>
                <div className="buttons">
                    <button className='bg-yellow-400 text-white px-6 py-3 rounded-md mr-5'>Our Services</button>
                </div>
            </div>
            <div className="img relative z-[10000] ">
                <img src={placedog} alt="" className='w-[400px]   ' />
                <div className="absolute top-0 right-0 left-0 bottom-0 w-full bg-yellow-500 opacity-70 ">

                </div>
                <AiFillPlayCircle size={50} className='text-white absolute top-[50%] left-[50%] translate-x-[-50%]   translate-y-[-50%]'/>
            </div>

        </div>
    )
}

export default OurServices