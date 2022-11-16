import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Boom = () => {


    return (
    <>
    <body className='overflow-x-hidden container-2xl'>
        <div className='mt-12 mx-2 xl:mx-20 lg:mx-20 md:mx-4 sm:mx-2 flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-row'>

            <div className='w-1/2'>
                <h1 className='text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold text-left text-black w-[323px] xl:w-[623px] lg:w-[623px] md:w-[623px] sm:w-[423px]'>
                    Boom shakalak! Let’s get started.
                </h1>
                <p className='text-base font-normal text-gray-500 text-left w-[303px] xl:w-[623px] lg:w-[623px] md:w-[623px] sm:w-[423px] mt-6'>
                    Design made-to-order for private clients, with one or more fittings. Have a workshop (atelier) in Paris.
                </p>
                <button className='w-full xl:w-[296px] lg:w-[296px] md:w-full sm:w-full h-[56px] bg-[#0F172A] text-base font-normal text-white mt-6 mr-4 align-left'>
                    Shop More +
                </button>
                <div className='flex mt-10 gap-6 mb-8'>
                    <Image className="cursor-pointer" src="/frame (9).svg" width={24} height={24} alt=""/>
                    <Image className="cursor-pointer" src="/Frame (10).svg" width={24} height={24} alt=""/>
                    <Image className="cursor-pointer" src="/Frame (11).svg" width={24} height={24} alt=""/>
                    <Image className="cursor-pointer" src="/Frame (12).svg" width={24} height={24} alt=""/>
                </div>
            </div>

            <div className='w-full xl:w-1/2 lg:w-1/2 md:w-full sm:w-full mx-auto'>
                <Image className="cursor-pointer" src="/Image 13 (1).png" width={624} height={432} alt=""/>
            </div>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-12 mx-12'>
            <div className='border border-gray-400 px-8 py-6 mr-8'>
                <Image className="cursor-pointer mx-auto" src="/Vector (14).svg" width={56} height={56} alt=""/>
                <p className='text-sm font-medium text-gray-500 text-center w-[141px] xl:w-[241px] lg:w-[241px] md:w-[241px] sm:w-[241px] mx-auto mb-4 h-[14px]'>
                    Interior minimalism for your property
                </p>
            </div>

            <div className='border border-gray-400 px-8 py-6 mr-8'>
                <Image className="cursor-pointer mx-auto" src="/Vector (14).svg" width={56} height={56} alt=""/>
                <p className='text-sm font-medium text-gray-500 text-center w-[141px] xl:w-[241px] lg:w-[241px] md:w-[241px] sm:w-[241px] mx-auto mb-4 h-[14px]'>
                    Furniture minimalism for your property
                </p>
            </div>

            <div className='border border-gray-400 px-8 py-6 mr-8'>
                <Image className="cursor-pointer mx-auto" src="/Vector (14).svg" width={56} height={56} alt=""/>
                <p className='text-sm font-medium text-gray-500 text-center w-[141px] xl:w-[241px] lg:w-[241px] md:w-[241px] sm:w-[241px] mx-auto mb-4 h-[14px]'>
                    Design minimalism for your future
                </p>
            </div>

            <div className='border border-gray-400 px-8 py-6 mr-8'>
                <Image className="cursor-pointer mx-auto" src="/Vector (14).svg" width={56} height={56} alt=""/>
                <p className='text-sm font-medium text-gray-500 text-center w-[141px] xl:w-[241px] lg:w-[241px] md:w-[241px] sm:w-[241px] mx-auto mb-4 h-[14px]'>
                    Design minimalism for your future
                </p>
            </div>
        </div>
    </body>
    </>
     );
   };
   
   export default Boom;