"use client"
import React from 'react'
import HeaderSection from './HeaderSection'
import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-reveal';

function GetinTouch() {
  return (
    <Fade bottom duration={1500}>
    <div className=" mt-8 sm:mt-24 text-[13px] sm:text-sm text-[#5D5D5D]" id='contact'>
    <div className="w-full mb-4 px-4 sm:pl-48">
    <HeaderSection title="Get in Touch" color="#CE0000"/>
    </div>
    <p className="w-full sm:w-1/2 px-4 sm:pl-48">
    <span>Interested in collaborating or discussing potential projects? Feel free to reach out via email at </span><a href="mailto:Okegbemigenius@gmail.com" className='text-blue-500'>Okegbemigenius@gmail.com</a> <span>You can also connect with me on LinkedIn and Twitter to stay updated on my latest work and insights.</span> 
    </p>
    <div className='flex mt-6 justify-center space-x-16 w-full sm:w-1/2 sm:ml-48 '>
    <Link href="https://www.linkedin.com/in/komolafe-abbey-6b2538216/">
    <Image src="/asset/linkedicon.png" width={96} height={96} className='w-8 object-contain cursor-pointer hover:grayscale transition ease-in-out duration-300'/>
    </Link>
    <Link href="https://x.com/AlienArTech">
    <Image src="/asset/twittericon.png" width={96} height={96} className='w-8 object-contain cursor-pointer hover:grayscale transition ease-in-out duration-300'/>
    </Link>
    </div>
    </div>
    </Fade>
  )
}

export default GetinTouch