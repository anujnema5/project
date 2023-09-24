import React from 'react'
import { allContents } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'

function Onlineclasses({ info }: { info: string }) {
  const foundContent: any = allContents.find((content) => content._raw.flattenedPath === info)
  const Content = getMDXComponent(foundContent.body.code)


  return (
    <div className='relative w-full h-2/5 lg:py-16 py-10 bg-class-banner bg-cover bg-no-repeat bg-fixed flex justify-center items-center'>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black/80 bg-cover flex items-center justify-center"></div>

        <div className="flex lg:px-0 px-5 2xl:w-8/12 xl:w-10/12  w-11/12 gap-6 items-center lg:flex-row flex-col">
          <div className="h-auto w-full z-30 prose-h2:text-white prose-p:text-base prose-p:text-gray-100 lg:w-2/4 lg:text-left text-center">
            <div className="prose prose-h2:text-3xl w-full mx-auto lg:mx-0">
            <Content />
            </div>
            <button className='bg-gradient-to-r mt-4 from-pink-700 to-blue-800 rounded-3xl py-1.5 px-4 text-gray-200'>Read More</button>

            <div className="lg:mt-8 flex flex-col gap-2 mt-7">
              <h3 className='text-lg font-semibold'>Download The App</h3>

              <div className="flex gap-3 lg:justify-start justify-center items-center w-auto pt-2">
                <Image src={'https://www.nifafinearts.com/images/gplay.png'} alt='play-store' width={160} height={160} className=''/>
                <Image src={'https://www.nifafinearts.com/images/appstore.png'} alt='play-store' width={160} height={160} className=''/>
              </div>
            </div>
          </div>
            <div className="lg:w-2/4 w-full z-30 h-80 border-2 p-3 bg-white">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"></iframe>
            </div>
        </div>
    </div>

  )
}

export default Onlineclasses