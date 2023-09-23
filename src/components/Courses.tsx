import { courses } from '@/data/courses'
import React from 'react'
import Coursescard from './common/Coursescard'

function Courses() {
    return (
        <div className='h-auto w-full flex flex-col py-14  bg-courses-banner bg-cover bg-no-repeat'>
            <h1 className='text-gray-800 mx-auto font-bold text-2xl'>Our Courses</h1>
            <div className="lg:w-8/12 mx-auto flex flex-wrap gap-7 py-10 justify-center ">
                {courses.map((course) => (
                    <Coursescard details={course}/>
                ))}
            </div>
        </div>
    )
}

export default Courses