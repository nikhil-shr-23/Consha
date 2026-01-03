"use client"

import Image from 'next/image'
import React from 'react'
import conshamock from "@/Resources/conshamock.svg";
import { TextReveal } from './textReveal';
  {/** will study all hero sections and revert back */}


const Herosec = () => {
  return (
  
<div className='bg-gray-100 h-screen w-screen flex flex-col items-end'>
  {/**Dividing the hero page into two divs, one with the laptop mock and the other with following -  */}
      <div className='ml-auto'>
       
        <Image src={conshamock} alt='hi' width={1200} height={700}/>
      </div>
      {/** this div below will have all the text etc, starting with the layout of a badge, heading, subheading and 2 buttons - download for free, upgrade to pro  */}
      <div>
        
      </div>

    </div>
  )
}

export default Herosec