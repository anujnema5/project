import React from 'react'
import { studentwork } from '@/data/students'

function Studentwork() {
    return (
        <div className='relative max-w-6xl h-auto m-auto flex flex-col justify-center items-center'>
            <div className="w-full flex items-center justify-center mt-16">
            <h1 className='text-2xl font-bold text-black'>Students Works</h1>
            </div>
            <div className='w-full  inline-block mt-8'>
                <ul className='flex flex-wrap'>
                    {studentwork.map((art) => (
                        <li key={art} className='lg:h-[40vh] h-[20vh] m-2 flex-grow  list-none'>
                            <img src={art} alt='student-work' className='rounded-lg overflow-clip object-cover align-bottom max-h-full min-w-full ' />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Studentwork