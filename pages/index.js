import { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import React from 'react';const Index = () => {


    return (
    <>

<body className="overflow-x-hidden container">
  <h1 className="text-4xl font-semibold text-center">
    Eco-Repair
  </h1>
  <div className='flex flex-col container-2xl justify-between mt-20 ml-auto 2xl:ml-auto xl:ml-24 lg:ml-auto md:ml-auto sm:ml-auto gap-8 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col'>

    <div className='container'>
      <div className='mx-4 md:mx-48 xl:mx-auto lg:mx-auto sm:mx-20'>
        <Image className="cursor-pointer" src="/image 2 (2).png" width={405} height={405} alt=""/>
      </div>
      
      <h1 className='text-2xl mt-10 text-gray-700 font-[work+sans] text-center font-medium'>
        Necessaire
      </h1>
      <div className='text-base text-noemal text-center text-gray-500'>
        Eco-Friendly Deodorant Fancy word 
      </div>
      <div className='text-base text-noemal text-center text-gray-500'>
        50 ml / 1.7 fl oz
      </div>
    </div>

    <div className='container'>
    <div className='mx-4 md:mx-48 xl:mx-auto lg:mx-auto sm:mx-20'>
      <Image className="cursor-pointer" src="/image 3 (2).png" width={405} height={405} alt=""/>
      </div>
      <h1 className='text-2xl mt-10 text-gray-700 font-[work+sans] text-center font-medium'>
        Grown Alchemist
      </h1>
      <div className='text-base text-noemal text-center text-gray-500'>
        Hydra repair day and night cream  
      </div>
      <div className='text-base text-noemal text-center text-gray-500'>
        65 ml / 2.19 fl oz
      </div>
    </div>

    <div className='container'>
    <div className='mx-4 md:mx-48 xl:mx-auto lg:mx-auto sm:mx-20 '>
      <Image className="cursor-pointer" src="/image 5 (2).png" width={405} height={405} alt=""/>
      </div>
      <h1 className='text-2xl mt-10 text-gray-700 font-[work+sans] text-center font-medium'>
        Patchouli
      </h1>
      <div className='text-base text-noemal text-center text-gray-500'>
        Therapeutic Essential Oil 
      </div>
      <div className='text-base text-noemal text-center text-gray-500'>
        15 ml / 0.5 fl oz
      </div>
    </div>

  </div>



  
</body>

    </>
  );
};

export default Index;