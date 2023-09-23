import './components.css'
import Link from 'next/link'
import React from 'react'

import { InfoHeader } from '@/data/HeaderLinks'
import { HeaderLinks } from '@/data/HeaderLinks'
import Bottomarrow from './SVGS/Bottomarrow'

function Header() {
  const { mail, phoneNumber, socialIcons, title } = InfoHeader

  return (
    <React.Fragment>

      {/* TOP HEADER */}
      <div className='bg-gradient-to-r from-[#812868] to-[#f954a4] max-w-full flex flex-col items-center justify-center lg:flex-row'>
        <div className="flex flex-col lg:gap-0 gap-3 items-center justify-center lg:justify-between lg:flex-row xl:w-8/12 lg:w-10/12 py-2 h-full">
          <h3 className='lg:text-sm'>{title}</h3>

          <div className="flex sm:flex-row flex-col items-center justify-center lg:gap-5 gap-2">
            <div className="flex items-center gap-4">
              {phoneNumber.numbers.map((number) => (
                <>
                  <span className="icon border">Icon</span>
                  <span>{number}</span>
                </>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Link href={`mailto:${mail}`}>{mail}</Link>

              <div className="social-icons flex gap-2">
                {socialIcons.map((icon) => (
                  <span>Icon</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN MENU */}

      <div className="w-full bg-white flex justify-center items-center">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-3 items-center justify-center lg:justify-between lg:w-8/12 w-full py-4 h-full bg-white ">

          {/* LOGO */}

          <div className="text-black">LOGO</div>

          <div className='lg:flex hidden gap-5'>
            {HeaderLinks.map((link) => (
              <span className='text-black text-sm font-light'>{link.title}</span>
            ))}
          </div>

          <div className="lg:hidden flex flex-col gap-1.5 justify-center items-center w-full">
            <div className="flex gap-1 items-center justify-center">
              <span className='text-gray-800 text-base'>Logo -</span>
              <Link href={`mailto:${mail}`} className='text-sky-950 text-base'>{mail}</Link>
            </div>

            <div className="flex items-center justify-center">
              <span className='text-gray-800 mr-1 text-base'>Logo</span>
              <span className='text-gray-800 text-sm'>+91-</span>
              <div className='flex gap-1'>
                {phoneNumber.numbers.map((number) => (
                  <span className='text-sky-950 text-sm'>{number}</span>
                ))}
              </div>
            </div>

            <div className="w-10/12 mt-4 relative">
              <select name="" id="" className='w-full transition-all outline-none appearance-none rounded-md px-3 py-2 bg-slate-800 focus:border focus:border-transparent'>
                {HeaderLinks.map((link) => (
                  <option value="" className='rounded-md'>{link.title}</option>
                ))}
              </select>
              <Bottomarrow className='absolute top-2.5 right-4' />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header