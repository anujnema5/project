import { course } from '@/types/types'
import Image from 'next/image'
import React from 'react'

function Coursescards({details}: {details: course}) {
  const {imgSrc, title} = details

  return (
    <div className='flex flex-col cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out hover:shadow-2xl justify-center shadow-xl shadow-black/20 hover:shadow-black/40 sm:w-64 sm:h-72 w-10/12 border-2 mb-5'>
      <Image src={imgSrc} alt='course-thumnail' width={200} height={200} className='w-full rounded-md h-full'/>

      <div className="bg-white py-5 px-5 flex flex-col items-center rounded-md">
        <h4 className='text-gray-800 text-center text-[90%] font-medium leading-6'>{title}</h4>
        <button className='bg-gradient-to-r mt-4 from-pink-700 to-blue-800 rounded-3xl py-1.5 px-4 text-gray-100 text-sm'>Know more</button>
      </div>
    </div>
  )
}

export default Coursescards