import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Form = () => {


    return (
    <>
    <body className='overflow-x-hidden container-2xl'>
        <div className=''>
            <div className=''>
                <h1 className='text-4xl font-semibold text-black text-center mt-12'>
                    Complete your purchase
                </h1>

                <div className='mx-72 flex flex-col'>

                    <h1 className='text-2xl font-medium mt-12 text-left'>
                        Personal info
                    </h1>
                    <h1 className='text-base font-medium text-black mt-6 '>
                        Email address
                    </h1>
                    <h1 className='text-base font-normal text-gray-500 mt-4 font-sans'>
                        We will send the purchase receipt to this address
                    </h1>
                    <div className=''>
                    <form action="demo_form.asp">
                        <input className='w-full xl:w-[842px] py-4 pl-4 mt-4 border border-gray-500' type="text" name="fname" placeholder="Nancymark@gmail.com"/>
                    </form>


                    <h1 className='text-base font-medium text-black mt-6 '>
                        Name
                    </h1>
                    <h1 className='text-base font-normal text-gray-500 mt-4 font-sans'>
                        We will use this to personalize your account experience
                    </h1>
                    <div className=''>
                    <form action="demo_form.asp">
                        <input className='w-full xl:w-[842px] py-4 pl-4 mt-4 border border-gray-500' type="text" name="fname" placeholder="Nancy Mark"/>
                    </form>


                    <h1 className='text-base font-medium text-black mt-6 '>
                        Contact No.
                    </h1>
                    <h1 className='text-base font-normal text-gray-500 mt-4 font-sans'>
                        We will use this in case of any query
                    </h1>
                    <div className=''>
                    <form action="demo_form.asp">
                        <input className='w-full xl:w-[842px] py-4 pl-4 mt-4 border border-gray-500' type="text" name="fname" placeholder="987-432-869"/>
                    </form>

                </div>

                <h1 className='text-2xl font-medium mt-12 text-left'>
                    Select Payment Method
                </h1>

                <div className='grid grid-cols-3 mt-6'>
                <div className='border border-gray-400 py-6  w-[259px]'>
                    <Image className="cursor-pointer mx-auto" src="/Vector (14).svg" width={56} height={56} alt=""/>
                    <p className='text-sm font-medium text-gray-500 mt-4 text-center w-[141px] xl:w-[155px] lg:w-[241px] md:w-[241px] sm:w-[241px] mx-auto mb-4 h-[14px]'>
                        Credit or debit card
                    </p>
                </div>

                <div className='border border-gray-400 py-6  w-[259px]'>
                    <Image className="cursor-pointer mx-auto" src="/Vector (14).svg" width={56} height={56} alt=""/>
                    <p className='text-sm font-medium text-gray-500 mt-4 text-center w-[141px] xl:w-[155px] lg:w-[241px] md:w-[241px] sm:w-[241px] mx-auto mb-4 h-[14px]'>
                        Google Pay
                    </p>
                </div>

                <div className='border border-gray-400 py-6  w-[259px]'>
                    <Image className="cursor-pointer mx-auto" src="/Vector (14).svg" width={56} height={56} alt=""/>
                    <p className='text-sm font-medium text-gray-500 mt-4 text-center w-[141px] xl:w-[155px] lg:w-[241px] md:w-[241px] sm:w-[241px] mx-auto mb-4 h-[14px]'>
                        Paypal
                    </p>
                </div>

                </div>

                </div>
                </div>

                </div>
            </div>
        </div>
    </body>
    </>
     );
   };
   
   export default Form;