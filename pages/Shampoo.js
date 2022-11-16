import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Boom = () => {


    return (
    <>
    <body className='overflow-x-hidden container-2xl'>
        <div className='mx-4 xl:mx-20 lg:mx-4 md:mx-4 sm:mx-2 justify-between gap-4 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-12'>
            <div className='w-[405px]'>
                <h1 className='w-[304px] xl:w-[404px] lg:w-[404px] md:w-[404px] sm:w-[404px] text-3xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl font-semibold text-black text-left'>
                    Full spectrum CBD shampoo
                </h1>
                <p className='text-base font-normal text-left text-gray-500 mt-4 w-[304px] xl:w-[404px] lg:w-[404px] md:w-[404px] sm:w-[404px]'>
                    Shampoo is typically used to remove the unwanted build-up of sebum in the hair without stripping out so much as to make hair unmanageable.
                </p>
                <div className='flex flex-col'>
                    <div className='flex mt-9'>
                        <Image className="cursor-pointer" src="/car-outline.svg" width={24} height={24} alt=""/>
                        <h1 className='text-gray-500 text-base font-normal ml-4'>
                            We deliver it to you
                        </h1>
                    </div>

                    <div className='flex mt-6'>
                        <Image className="cursor-pointer" src="/Gift.svg" width={24} height={24} alt=""/>
                        <h1 className='text-gray-500 text-base font-normal ml-4'>
                            Cash on delivery also available
                        </h1>
                    </div>

                    <div className='flex mt-6'>
                        <Image className="cursor-pointer" src="/Shoe.svg" width={24} height={24} alt=""/>
                        <h1 className='text-gray-500 text-base font-normal ml-4'>
                            Get free skin care samples
                        </h1>
                    </div>
                </div>

            </div>

            <div className='w-full xl:w-[515px] lg:w-[415px] md:w-full sm:w-full  '>
                <Image className="cursor-pointer mx-auto" src="/Image 209.png" width={515} height={342} alt=""/>
            </div>

            <div className='w-[296px] mx-auto ml-1 xl:ml-28 lg:ml-2  mt-16'>
                <div className='flex justify-between w-[296px]'>
                    <h1 className='text-left text-2xl font-semibold mt-6'>
                        $50
                    </h1>

                    <div className='flex gap-2 mt-4'>
                        <Image className="cursor-pointer" src="/Vector (12).svg" width={23} height={21} alt=""/>
                        <Image className="cursor-pointer" src="/Vector (12).svg" width={23} height={21} alt=""/>
                        <Image className="cursor-pointer" src="/Vector (12).svg" width={23} height={21} alt=""/>
                        <Image className="cursor-pointer" src="/Vector (12).svg" width={23} height={21} alt=""/>
                        <Image className="cursor-pointer" src="/Vector (12).svg" width={23} height={21} alt=""/>
                    </div>
                </div>

                <div className="flex items-center my-auto space-x-4 border relative mt-4">
                    <select type="text" name="language" required="" id="language" className="xl:w-[296px] lg:w-[980px] md:w-[768px] sm:w-full w-full h-[48px] bg-white w-full appearance-none pr-6 pl-2 text-sm border border-transparent focus:outline-none text-gray-900 rounded">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                        <option value="3">6</option>
                        <option value="3">7</option>
                        <option value="3">8</option>
                        <option value="3">9</option>
                        <option value="3">10</option>
                    </select>
                    <div className="z-30 cursor-pointer pointer-events-none absolute right-4">
                        <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                    </div>
                </div>

                <button className='xl:w-[296px] mt-4 lg:w-[980px] md:w-[730px] sm:w-full w-full h-[48px] bg-[#0F172A] text-base font-normal text-white'>
                    Add To Cart
                </button>

                <button className='xl:w-[296px] mt-4 lg:w-[980px] md:w-[730px] sm:w-full w-full h-[48px] bg-white border border-gray-500 text-base font-normal text-black'>
                    Wishlist
                </button>

            </div>
        </div>
    </body>
    </>
     );
   };
   
   export default Boom;