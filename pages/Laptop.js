import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Laptop = () => {


    return (
    <>
    <body className='overflow-x-hidden container-2xl'>
        <div className='mt-12 border-b pb-6 mx-2 xl:mx-20 lg:mx-20 md:mx-4 sm:mx-2 flex flex-col xl:flex-ow lg:flex-row md:flex-col sm:flex-col gap-8'>
            <div className=''>
                <div className=''>
                    <Image className="cursor-pointer xl:w-[624px] lg:w-full md:w-full" src="/Image 34.png" width={624} height={415} alt=""/>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-8 xl:w-[624px] lg:w-['>
                    <Image className="cursor-pointer xl:w-[187px] lg:w-[270px] md:w-[270px] sm:w-[200px] w-full" src="/Image 34.png" width={187} height={109} alt=""/>
                    <Image className="cursor-pointer xl:w-[187px] lg:w-[270px] md:w-[270px] w-full" src="/Image 34.png" width={187} height={109} alt=""/>
                    <Image className="cursor-pointer xl:w-[187px] lg:w-[270px] md:w-[270px] w-full" src="/Image 34.png" width={187} height={109} alt=""/>
                </div>
            </div>

            <div className='w-[624px]'>
                <div className=''>
                    <h1 className='text-4xl font-semibold font-sans'>
                        $2250.00
                    </h1>
                    <h1 className='text-2xl font-medium mt-6'>
                        Laptop Pro 2019
                    </h1>
                    <p className='text-base font-normal w-[310px] xl:w-[624px] lg:w-[624px] md:w-full sm:w-full text-gray-500 text-left mt-5 mr-4'>
                        Can open/edit MS Office files using free embedded QuickOffice editor or Google Docs, and can download Microsoft Office Online (an online version of Microsoft Office) for free. Cannot install standard MS Office software.
                    </p>
                    <h1 className='text-2xl font-medium mt-6'>
                        Select Color
                    </h1>
                    <div className='grid grid-cols-1 xl:grid-cols-2 lg-grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-6 gap-y-4 gap-x-4'>
                        <div className='flex bg-gray-100 w-[296px]'>
                            <Image className="cursor-pointer my-auto mx-4" src="/Ellipse 79.svg" width={24} height={24} alt=""/>
                            <h1 className='text-base font-medium py-4'>
                                Grey
                            </h1>
                        </div>

                        <div className='flex bg-gray-100 w-[296px]'>
                            <Image className="cursor-pointer my-auto mx-4" src="/Ellipse 79 (1).svg" width={24} height={24} alt=""/>
                            <h1 className='text-base font-medium py-4'>
                                Space Grey
                            </h1>
                        </div>

                        <div className='flex bg-gray-100 w-[296px]'>
                            <Image className="cursor-pointer my-auto mx-4" src="/Ellipse 79 (2).svg" width={24} height={24} alt=""/>
                            <h1 className='text-base font-medium py-4'>
                                Black
                            </h1>
                        </div>

                        <div className='flex bg-gray-100 w-[296px]'>
                            <Image className="cursor-pointer my-auto mx-4" src="/Ellipse 79 (3).svg" width={24} height={24} alt=""/>
                            <h1 className='text-base font-medium py-4'>
                                White
                            </h1>
                        </div>
                    </div>

                    <h1 className='text-2xl font-medium mt-4'>
                        Select specification
                    </h1>

                    <div className='flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-8 gap-y-4 mt-6'>
                        <div className='flex flex-col border border-gray-500 px-6 w-[296px] py-4'>
                            <h1 className='text-base font-semibold'>
                                10th Gen Core™   
                            </h1>
                            <h1 className='text-base font-normal w-[239px] text-gray-500'>
                                10th Gen Intel® Core™ processors & NVIDIA® graphics   
                            </h1>
                        </div>

                        <div className='flex flex-col border border-gray-500 px-6 w-[296px] py-4'>
                            <h1 className='text-base font-semibold'>
                                10th Gen Core™   
                            </h1>
                            <h1 className='text-base font-normal w-[239px] text-gray-500'>
                                10th Gen Intel® Core™ processors & NVIDIA® graphics   
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mx-2 xl:mx-20 lg:mx-20 md:mx-4 sm:mx-2 mt-6'>
            <h1 className='text-base font-semibold'>
                Laptop Pro early 2019 with Touchbar   
            </h1>
            <p className='text-base font-normal w-[310px] xl:w-[624px] lg:w-[624px] md:w-full sm:w-full text-gray-500 text-left mt-4'>
            Space Grey | 13.3 2TB 2.4GHZ Quad Core| 8GB Ram | 1TB SSD |2 Years Warrantty 
            </p>
        </div>
    </body>
    </>
     );
   };
   
   export default Laptop;