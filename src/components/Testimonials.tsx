import { testimonials } from '@/data/testimonials'
import React from 'react'

function Testimonials() {
    return (
        <div className='w-full mt-8 bg-student-banner bg-cover bg-no-repeat bg-center bg-fixed py-14 hidden lg:block'>

            <h1 className='text-center text-2xl font-bold pb-10'>Student&apos;s Testimonials</h1>
            <div className="flex flex-wrap lg:gap-7 xl:w-9/12 lg:w-full w-full  mx-auto justify-center">
                {testimonials.map((testimonial) => (
                    <div key={testimonial} className='p-1 bg-white'>
                    <iframe className="w-80 h-48" src={testimonial}></iframe>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials