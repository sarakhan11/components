import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Hero = () => {


    return (
    <>
    <body className='overflow-x-hidden container-2xl'>
        <div className='flex flex-col xl:flex=row lg:flex-row md:flex-col sm:flex-col'>
            <div className='w-full xl:w-1/3 lg:w-1/3 md:w-full sm:w-full ml-2 xl:ml-20 lg:ml-20 md:ml-4 sm:ml-2'>
                <h1 className='text-2xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-3xl font-bold text-black text-left font-sans mt-36'>
                    Beauty In Style
                </h1>
                <p className='text-xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl font-sans font-normal text-gray-500 text-left mt-6'>
                    Find the latest collections that suit your needs and tastes. 
                </p>
                <button className='w-full xl:w-[296px] lg:w-[296px] md:w-full sm:w-full h-[56px] bg-[#0F172A] text-base font-normal text-white mt-5 mr-4'>
                    Add To Cart
                </button>
            </div>

            <div className='w-2/3 flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-10 mt-12 mx-auto xl:mx-auto lg:mx-auto md:mx-4 sm:mx-4 '>
                <Image className="cursor-pointer" src="/Image 311.png" width={405} height={439} alt=""/>
                <Image className="cursor-pointer" src="/Image 312.png" width={296} height={439} alt=""/>
            </div>
        </div>
        <div className='mx-20 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col mt-12 mb-20'>
            <p className='text-4xl font-normal text-black mr-8 my-auto my-8'>
                Categories
            </p>
            <div className='grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 gap-8'>
            <div className='border border-gray-400 px-14 py-8 mr-8'>
                <Image className="cursor-pointer mx-auto" src="/skirt-svgrepo-com 1.svg" width={56} height={56} alt=""/>
                <p className='text-2xl font-medium text-gray-500 text-center'>
                    Skirt
                </p>
            </div>

            <div className='border border-gray-400 px-14 py-8 mr-8'>
                <Image className="cursor-pointer mx-auto" src="/high-heels-fashion-svgrepo-com 1.svg" width={56} height={56} alt=""/>
                <p className='text-2xl font-medium text-gray-500 text-center'>
                    Heels
                </p>
            </div>

            <div className='border border-gray-400 px-14 py-8 mr-8'>
                <Image className="cursor-pointer mx-auto" src="/Vector (14).svg" width={56} height={56} alt=""/>
                <p className='text-2xl font-medium text-gray-500 text-center'>
                    Coats
                </p>
            </div>

            <div className='border border-gray-400 px-14 py-8 mr-8'>
                <Image className="cursor-pointer mx-auto" src="/Vector (15).svg" width={56} height={56} alt=""/>
                <p className='text-2xl font-medium text-gray-500 text-center'>
                    Heels
                </p>
            </div>

            <div className='border border-gray-400 px-14 py-8 mr-8'>
                <Image className="cursor-pointer mx-auto" src="/clutch-svgrepo-com 1.svg" width={56} height={56} alt=""/>
                <p className='text-2xl font-medium text-gray-500 text-center'>
                    Bags
                </p>
            </div>
            </div>
        </div>
    </body>
    </>
     );
   };
   
   export default Hero;