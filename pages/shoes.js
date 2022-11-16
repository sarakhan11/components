import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const shoes = () => {


    return (
    <>
    <body className='overflow-x-hidden container-2xl'>
        <div className='gap-8 flex flex-col xl:flex-row lg:flex-col md:flex-col sm:flex-col'>
            <div className='w-1/2 xl:w-1/2 lg:w-2/3 md:w-[696px] ml-20 mt-12 mx-auto'>
                <Image className="cursor-pointer mx-auto" src="/image 2 (1).png" width={624} height={572} alt=""/>
            </div>

            <div className='w-full xl:w-1/2 lg:w-full px-4 md:w-[696px] sm:w-[343px] mr-20 ml-0 xl:ml-0 lg:ml-0 md:ml-10 sm:ml-4 mt-12 bg-gray-50 pt-12 pl-4 xl:pl-12 lg:pl-12 md:pl-2 sm:pl-4'>

                <h1 className='font-semibold text-4xl w-[428px] xl:w-[528px] lg:w-[528px] md:w-[528px] sm:w-[428px]'>
                    Nike Revolution 5 Running Trainers
                </h1>
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

                <p className='text-base text-normal text-gray-500 mt-8 w-[328px] xl:w-[528px] lg:w-[528px] md:w-[528px] sm:w-[338px]'>
                    . <b>Breathable support:</b> lightweight knit textile wraps your foot in breathable comfort. Reinforced heel and no-sew overlays lend support and durability. 
                </p>
                <p className='text-base text-normal text-gray-500 mt-8 w-[328px] xl:w-[528px] lg:w-[528px] md:w-[528px] sm:w-[338px]'>
                    . <b>Lightweight cushioning:</b> soft foam midsole delivers a smooth, stable ride. Its textured outer wall helps reduce weight and hide creases.
                </p>

                <h1 className='text-gray-600 text-base font-medium mt-6'>
                    <b>
                        Quantity
                    </b>
                </h1>

                <div className='flex flex-col xl:flex-row lg:flex-row md:flex-col sm:flex-col gap-4'>
                    <div className="flex items-center my-auto space-x-4 border relative">
                        <select type="text" name="language" required="" id="language" className="w-[100px] h-[48px] bg-white w-full appearance-none pr-6 pl-2 text-sm border border-transparent focus:outline-none text-gray-900 rounded">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <div className="z-30 cursor-pointer pointer-events-none absolute right-4">
                            <Image className="cursor-pointer" src="/akar-icons_chevron-left.svg" width={16} height={16} alt=""/>
                        </div>
                    </div>

                    <button className='w-full xl:w-[412px] lg:w-[412px] md:w-full sm:w-full h-[48px] bg-[#0F172A] text-base font-normal text-white'>
                        Add To Cart
                    </button>
                </div>

                
            </div>
        </div>

        <div className='mt-12 ml-4 xl:ml-32 lg:ml-28 md:ml-20 sm:ml-4 gap-8 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-y-8 '>
            <div className='flex gap-4'>
                <Image className="cursor-pointer" src="/car-outline.svg" width={18} height={12} alt=""/>
                <h1 className='text-base font-normal text-gray-600 my-auto'>
                    We deliver it to you
                </h1>
            </div>

            <div className='flex gap-4'>
                <Image className="cursor-pointer" src="/shoe.svg" width={18} height={12} alt=""/>
                <h1 className='text-base font-normal text-gray-600 my-auto'>
                    We deliver it to you
                </h1>
            </div>

            <div className='flex gap-4'>
                <Image className="cursor-pointer" src="/gift.svg" width={18} height={12} alt=""/>
                <h1 className='text-base font-normal text-gray-600 my-auto'>
                    We deliver it to you
                </h1>
            </div>

            <div className='flex gap-4'>
                <Image className="cursor-pointer" src="/car-outline.svg" width={18} height={12} alt=""/>
                <h1 className='text-base font-normal text-gray-600 my-auto'>
                    We deliver it to you
                </h1>
            </div>
        
        </div>

    </body>
    </>
     );
   };
   
   export default shoes;
