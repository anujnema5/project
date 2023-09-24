import React from 'react'
import { studentwork } from '@/data/students'
import Link from 'next/link'

function Studentwork() {
    return (
        <div className='relative max-w-5xl h-auto m-auto flex flex-col justify-center items-center'>
            <div className="w-full flex items-center justify-center 2xl:mt-16 lg:mt-0 mt-0">
                <h1 className='text-2xl font-bold text-black'>Students Works</h1>
            </div>
            <div className='w-full inline-block lg:mt-8 mt-5 px-3'>
                <ul className='flex flex-wrap'>
                    {studentwork.map((art) => (
                        <li key={art} className='lg:h-[40vh] sm:h-[30vh] h-[20vh] m-2 flex-grow  list-none'>
                            <Link href={art} target='_blank'>
                                <img src={art} alt='student-work' className='rounded-lg overflow-clip object-cover align-bottom max-h-full min-w-full ' />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Studentwork