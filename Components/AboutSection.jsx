"use client"
import Image from 'next/image'
import React from 'react'
import { Fade, Zoom } from 'react-reveal';

function AboutSection() {
  return (
    <div id='about-me'>
        <Fade bottom duration={1500}>
        <div className='w-full sm:w-1/2 px-3 sm:ml-48 mt-8 sm:mt-24 space-y-2 sm:space-y-6'>
        <h3 className='text-2xl font-extrabold text-black'>About Me</h3>
        <p className='font-normal text-[13px] sm:text-sm text-[#464646]'>Am a dynamic Full-Stack Developer and Production Designer passionate about crafting seamless digital experiences. With a robust skill set honed over 4+ years in the industry, I thrive at the intersection of technology and design, bringing ideas to life through innovation and creativity.</p>
        </div>
        </Fade>
        <div className='flex mx-auto w-full max-w-3xl flex-wrap items-center justify-between text-[13px] sm:text-sm text-[#CE0000] font-medium'>
           <Zoom>
            <div className='map'>
            <Image src="/asset/alienartech-buib.gif" width={220} height={220} className='w-40 sm:max-w-[420px] object-contain'/>
            <p className='relative -top-7'>IDEA</p>
            </div>
            </Zoom>
            <Zoom>
            <div className='map'>
            <Image src="/asset/alienartech-design.gif" width={220} height={220} className='w-40 sm:max-w-[420px] object-contain'/>
            <p className='relative top-2'>DESIGN</p>
            </div>
            </Zoom>
            <Zoom>
            <div className='map'>
            <Image src="/asset/alienartech-dev.gif" width={220} height={220} className='w-40 sm:max-w-[420px] object-contain'/>
            <p className='relative top-2'>CODING</p>
            </div>
            </Zoom>
        </div>
    </div>
  )
}

export default AboutSection