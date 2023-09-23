import React from 'react'
import { studentwork } from '@/data/students'
import Image from 'next/image'

function Studentwork() {
    return (
        <div className='relative max-w-5xl block h-auto m-auto'>
            <ul>
                {studentwork.map((art) => (
                    <li className='h-56 flex-grow list-none'>
                        <img src={art} alt='student-work' className='rounded-lg overflow-clip object-cover align-bottom max-h-full min-w-full' />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Studentwork