import React from 'react';
import Homepage from '../constants/homepage.png';

function Homecard() {
  return (
    <div className='mt-9  w-full  relative'>
        <img src={Homepage} alt='homepage' className='w-1/2 h-1/2 md:w-full  h-auto' />
        <div className='absolute top-[2%]   lg:top-[20%] lg:left-[10%]  bg-opacity-75 w-3/4  p-4 rounded-md'>  
            <h1 style={{ fontFamily: "Lato" }} className='text-3xl  md:text-6xl font-bold text-black'>MovieStreamer</h1>
            <p className='text-xl md:text-3xl text-gray-600 font-medium'>Enjoy Watching</p>
            <div className='mt-8'>
                <p className=' text-md md:text-xl mb-3'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerc. </p>
                <p className='text-md md:text-xl'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
                </p>
            </div>
        </div>
    </div>
  
  );
}

export default Homecard;
