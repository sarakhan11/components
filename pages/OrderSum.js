import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const OrderSum = () => {


    return (
    <>
    <body className='overflow-x-hidden container-2xl'>
        <div className=''>
          <div className=''>
            <h1 className='text-blacl text-center font-sans text-4xl font-semibold mt-12'>
              Thank you for your order
            </h1>

            <div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8 mx-4 xl:mx-20 lg:mx-20 md:mx-8 sm:mx-2 border-b pb-8'>
              <div className='flex gap-2'>
                  <h1 className='text-xl font-medium text-black'>
                    Order number:
                  </h1>
                  <h1 className='text-xl font-normal text-gray-500'>
                    4567899443 
                  </h1>
              </div>

              <div className='flex gap-2'>
                  <h1 className='text-xl font-medium text-black'>
                    Order date: 
                  </h1>
                  <h1 className='text-xl font-normal text-gray-500'>
                    2022-02-23 
                  </h1>
              </div>

              <div className=''>
                  <h1 className='text-xl font-medium text-black'>
                    Delivery details:
                  </h1>
              </div>

              <div className='flex'>
                <ul className='flex flex-col gap-y-4'>
                  <li>
                    <h1 className='text-base font-medium text-gray-500 w-[237px]'>
                      Amazon Beat Box A-48 High Sound Speaker
                    </h1>
                  </li>

                  <li>
                    <h1 className='text-base font-medium text-gray-500 w-[237px]'>
                      Beats Studio 3 Wireless headphones
                    </h1>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </div>


        <div className='mx-2 xl:mx-20 lg:mx-20 md:mx-0 sm:mx-2'>
          <h1 className='text-2xl font-medium mt-6 text-left ml-8'>
            Order Summary
          </h1>

          <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 border-b pb-8'>
              <div className='flex gap-4 mt-10'>
                <Image className="cursor-pointer my-auto mx-4" src="/matthew-ball-Ve7cs1eEDT4-unsplash.png" width={128} height={96} alt=""/>
                <div className='flex flex-col gap-y-2 '>
                  <h1 className='text-base font-normal text-gray-500'>
                    Amazon Beat Box A-48 High Sound Speaker
                  </h1>
                  <h1 className='text-base font-medium'>
                    $70
                  </h1>
                  <h1 className='text-base font-normal text-gray-500'>
                    Quantity 1
                  </h1>
                </div>
              </div>

              <div className='flex gap-4 mt-10'>
                <Image className="cursor-pointer my-auto mx-4" src="/image 209 (1).png" width={128} height={96} alt=""/>
                <div className='flex flex-col gap-y-2 '>
                  <h1 className='text-base font-normal text-gray-500'>
                    Amazon Beat Box A-48 High Sound Speaker
                  </h1>
                  <h1 className='text-base font-medium'>
                    $70
                  </h1>
                  <h1 className='text-base font-normal text-gray-500'>
                    Quantity 1
                  </h1>
                </div>
              </div>

              <div className='flex gap-4 mt-10'>
                <Image className="cursor-pointer my-auto mx-4" src="/alexunder-hess-bWZAPKm0zZE-unsplash.png" width={128} height={96} alt=""/>
                <div className='flex flex-col gap-y-2 '>
                  <h1 className='text-base font-normal text-gray-500'>
                    Amazon Beat Box A-48 High Sound Speaker
                  </h1>
                  <h1 className='text-base font-medium'>
                    $70
                  </h1>
                  <h1 className='text-base font-normal text-gray-500'>
                    Quantity 1
                  </h1>
                </div>
              </div>

              <div className='flex gap-4 mt-10'>
                <Image className="cursor-pointer my-auto mx-4" src="/image 50.png" width={128} height={96} alt=""/>
                <div className='flex flex-col gap-y-2 '>
                  <h1 className='text-base font-normal text-gray-500'>
                    Amazon Beat Box A-48 High Sound Speaker
                  </h1>
                  <h1 className='text-base font-medium'>
                    $70
                  </h1>
                  <h1 className='text-base font-normal text-gray-500'>
                    Quantity 1
                  </h1>
                </div>
              </div>
          </div>
        </div>


        <div className='mb-12 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-8 gap-y-4 mx-2 xl:mx-20 lg:mx-20 md:mx-4 sm:mx-2 mt-6'>
          <div>
          <h1 className='text-2xl font-Normal text-left'>
            Order Total
          </h1>

          <div className='flex items-left flex-col justify-between w-full xl:w-[406px] mt-6'>
            <div className='justify-between flex'>
              <h1 className='text-base font-normal text-gray-500'>
                Sub-Total
              </h1>
              <h1 className='text-base font-normal text-gray-500'>
                $340
              </h1>
            </div>
          </div>

          <div className='flex items-left flex-col justify-between w-full xl:w-[406px] mt-2'>
            <div className='justify-between flex'>
              <h1 className='text-base font-normal text-gray-500'>
                Shipping
              </h1>
              <h1 className='text-base font-normal text-gray-500'>
                $7
              </h1>
            </div>
          </div>


          <div className='flex items-left flex-col justify-between w-full xl:w-[406px] mt-2'>
            <div className='justify-between flex'>
              <h1 className='text-base font-normal text-gray-500'>
                Tax
              </h1>
              <h1 className='text-base font-normal text-gray-500'>
                $13
              </h1>
            </div>
          </div>

          <div className='flex items-left flex-col justify-between w-full xl:w-[406px] mt-2'>
            <div className='justify-between flex'>
              <h1 className='text-base font-bold text-black'>
                Order Total
              </h1>
              <h1 className='text-base font-bold text-black'>
                $360
              </h1>
            </div>
          </div>

          <button className='xl:w-[406px] mt-6 lg:w-[980px] md:w-[730px] sm:w-full w-full h-[48px] bg-[#0F172A] text-base font-normal text-white'>
            Track Your Order
          </button>

          </div>


          <div className=''>
            <h1 className='text-base font-normal text-gray-500 w-auto xl:w-[515px] lg:w-[415px] md:w-full sm:w-[415px] mb-12 mt-4'>
              We’ll send you shipping confirmation when your items are on the way! We appericate your business, and hope you enjoy your purchase Thank you! 
            </h1>
            <h1 className='text-base font-normal text-gray-500'>
              Questions? Contact our <b>Customer Support</b>
            </h1>
            <h1 className='text-base font-normal text-gray-500'>
              Questions? Contact our <b>FAQ</b>
            </h1>
          </div>

        </div>

    </body>
    </>
     );
   };
   
   export default OrderSum;