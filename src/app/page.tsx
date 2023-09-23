import ContentLayout from '@/components/ContentLayout'
import Courses from '@/components/Courses'
import ImageSlider from '@/components/ImageSlider'
import Marqueetext from '@/components/Marqueetext'
import Onlineclasses from '@/components/Onlineclasses'
import Studentwork from '@/components/Studentwork'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full h-auto">
        <ImageSlider/>
        <Marqueetext/>
        <ContentLayout info='Information'/>
        <Onlineclasses info='Classes'/>
        <Courses/>
        <Studentwork/>
        <Testimonials/>
      </div>
    </main>
  )
}
