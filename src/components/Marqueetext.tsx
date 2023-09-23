import React from 'react'
import Marquee from 'react-fast-marquee';
import MarqueeText from "react-fast-marquee";

function Marqueetext() {
  return (
      <div className="lg:w-6/12 w-full lg:px-0 px-5 mt-4 flex lg:flex-row flex-col items-center justify-center lg:gap-4 gap-1.5 mx-auto">
      <span className='text-gray-900 text-base mx-auto whitespace-nowrap'><b>Nifa Updates:</b></span>
        <Marquee direction="left" pauseOnHover speed={30}>
          <strong className='font-medium text-pink-700'>All NIFA courses are now available worldwide through our Live and Interactive Online Classes. Please&nbsp;download the NIFA app from our online classes page to register for a complimentary trial class.</strong>
        </Marquee>
      </div>
  )
}

export default Marqueetext