import { Content, ContentlayerGenTypes, allContents } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'
import { ContentConfig } from 'tailwindcss/types/config'

function ContentLayout({info}: {info: string}) {
  const foundContent :any = allContents.find((content) => content._raw.flattenedPath === info)
  const Content = getMDXComponent(foundContent.body.code)
  
  return (
    <article className='prose max-w-5xl text-center py-10 px-5 lg:px-0 mx-auto'>
      <Content />
      <button className='bg-gradient-to-r from-pink-700 to-blue-800 rounded-3xl py-1 px-4 mt-1 text-gray-200'>Read More</button>
    </article>
  )
}

export default ContentLayout