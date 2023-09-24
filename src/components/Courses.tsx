import { courses } from '@/data/courses'
import React from 'react'
import Coursescard from './common/Coursescard'

function Courses() {
    return (
        <div className='h-auto w-full flex flex-col lg:py-14 pt-7 bg-courses-banner bg-cover bg-no-repeat'>
            <h1 className='text-gray-800 mx-auto font-bold text-2xl'>Our Courses</h1>
            <div className="2xl:w-10/12 xl:w-11/12 lg:px-10 px-0 mx-auto flex flex-wrap gap-7 py-7 justify-center ">
                {courses.map((course) => (
                    <Coursescard key={course.title} details={course}/>
                ))}
            </div>
        </div>
    )
}

export default Courses