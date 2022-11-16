import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const sofa = () => {


    return (
    <>
    <body className='overflow-x-hidden container-2xl'>
        <div className='flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between m-4'>
        <div className='mt-12 w-2/5'>

            <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col  xl:mx-20 lg:mx-20 md:mx-4 sm:mx-4 mx-2  justify-between w-[362px] mb-10'>
                <div className='text-base text-medium '>
                    General Dimension
                </div>
                <div className='text-base text-medium text-gray-500'>
                    85”L 35”D 33”H
                </div>
            </div>

            <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col border-t border-gray-200  xl:mx-20 lg:mx-20 md:mx-4 sm:mx-4 mx-2  w-[277px] justify-between mb-10'>
                <div className='text-base text-medium '>
                    Seat Height
                </div>
                <div className='text-base text-medium text-gray-500'>
                    17”
                </div>
            </div>

            <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col border-t border-gray-200  xl:mx-20 lg:mx-20 md:mx-4 sm:mx-4 mx-2  w-[277px] justify-between mb-10'>
                <div className='text-base text-medium '>
                    Arm Height
                </div>
                <div className='text-base text-medium text-gray-500'>
                    24”
                </div>
            </div>

            <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col border-t border-gray-200  xl:mx-20 lg:mx-20 md:mx-4 sm:mx-4 mx-2  w-[277px] justify-between mb-10'>
                <div className='text-base text-medium '>
                Seat Depth
                </div>
                <div className='text-base text-medium text-gray-500'>
                    22”
                </div>
            </div>

            <div className='flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col border-t border-gray-200  xl:mx-20 lg:mx-20 md:mx-4 sm:mx-4 mx-2  w-[277px] justify-between mb-10'>
                <div className='text-base text-medium '>
                    Leg Height
                </div>
                <div className='text-base text-medium text-gray-500'>
                    7”
                </div>
            </div>
            </div>

            <div className='3/5 mt-12'>
                <Image className="cursor-pointer " src="/image 1.png" width={733} height={264} alt=""/>
            </div>
            
        </div>

        <div className='container flex flex-col xl:flex-row lg:flex-col md:flex-col sm:flex-col'>

            <div className=''>
                <h1 className='text-4xl text-left font-semibold font-sans ml-20'>
                    About this piece
                </h1>
                <div className='text-base text-center xl:text-left lg:text-left md:text-left sm:text-center text-center font-normal font-sans ml-4 xl:ml-20 lg:ml-20 md:ml-2 sm:ml-4 mr-4 text-gray-600 xl:w-[515px] lg:w-[815px] md:w-[715px] sm:w-[315px] w-auto mt-12'>
                    Slim tapered arms and a tightly padded back make Digby feel roomy even in smaller areas. Its exclamation-point arm is finished with a tall tapered leg to add visual height, and the tight back enhances the architectural feel of this style while offering surprising comfort. Slim tapered arms and a tightly padded back make Digby feel roomy even in smaller areas.
                </div>
            </div>

            <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col'>
                <div className='flex flex-col mt-28 ml-10'>
                    <Image className="cursor-pointer mx-auto " src="/Vector (10).svg" width={37.5} height={37.5} alt=""/>
                    <h1 className='text-2xl font-semibold mt-7 mx-auto'>
                        Customizable
                    </h1>
                </div>

                <div className='flex flex-col mt-28 ml-10'>
                    <Image className="cursor-pointer mx-auto " src="/Vector (10).svg" width={37.5} height={37.5} alt=""/>
                    <h1 className='text-2xl font-semibold mt-7 mx-auto'>
                        Customizable
                    </h1>
                </div>

                <div className='flex flex-col mt-28 ml-10'>
                    <Image className="cursor-pointer mx-auto " src="/Vector (10).svg" width={37.5} height={37.5} alt=""/>
                    <h1 className='text-2xl font-semibold mt-7 mx-auto'>
                        Customizable
                    </h1>
                </div>

                <div className='flex flex-col mt-28 ml-10'>
                    <Image className="cursor-pointer mx-auto " src="/Vector (10).svg" width={37.5} height={37.5} alt=""/>
                    <h1 className='text-2xl font-semibold mt-7 mx-auto'>
                        Customizable
                    </h1>
                </div>
            </div>
            
        </div>
        
        
        
    </body>
    </>
     );
   };
   
   export default sofa;