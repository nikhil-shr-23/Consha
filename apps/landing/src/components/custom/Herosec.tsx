"use client"

import Image from 'next/image'
import React from 'react'
import conshamock from "@/Resources/conshamock.svg";
  {/** will study all hero sections and revert back */}


const Herosec = () => {
  return (
  
    <div className='bg-gray-100 h-screen w-screen'>
      <div>
        <h1>hi</h1>
        <Image src={conshamock} alt='hi' width={1200} height={700}/>
      </div>

    </div>
  )
}

export default Herosec