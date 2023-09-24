import { InfoHeader } from '@/data/HeaderLinks'
import { footerData } from '@/data/sitedata'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    const { name, mail, phoneNumber, socialIcons, title } = InfoHeader

    return (
        <footer className='bg-footer-banner w-full bg-no-repeat bg-cover bg-center lg:py-4 lg:pb-8 px-5 py-2'>
            <div className='mx-auto lg:max-w-6xl flex flex-col gap-12 justify-between'>
                <div className="w-full h-full flex lg:flex-row flex-wrap justify-between">
                    {footerData.map((data) => {
                        const { title, links } = data
                        return (
                            <div key={title} className='mt-7'>
                                <div className="flex flex-col gap-3">
                                    <h4 className='text-xl font-semibold text-gray-900'>{title}</h4>
                                    <div className='mt-2 flex flex-col gap-3'>
                                        {links.map((link, index) => {
                                            const { href, title } = link
                                            return (
                                                <Link href={href} key={index} className='text-gray-800 font-normal text-sm'>
                                                    {title}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>

                <div className='w-full h-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-4 '>
                    <div className="text-gray-900 font-semibold">
                        <h6 className='text-gray-900 font-semibold text-base mb-1'>{name}</h6>
                        <span className='text-gray-900 font-semibold text-base'>Connect with Us</span>

                        <div className='mt-3 flex gap-2 mb-2'>
                            {phoneNumber.numbers.map((number) => (
                                <Link className='text-sm font-medium' key={number} href={`tel:${number}`}>+91 {number}</Link>
                            ))}

                            {/* MAIL */}
                        </div>
                        <Link className='mt-2 font-medium' href={`mailto:${mail}`}>{mail}</Link>

                        <div className='flex gap-3 mt-3'>
                            {socialIcons.map((icon) => (
                                <span key={icon.title} className='border border-black'>Icon</span>
                            ))}
                        </div>
                    </div>


                    <div className="download mb-3 text-gray-800 flex flex-col lg:gap-4 gap-4 justify-end mt-3">
                        <span className='lg:text-right text-left text-lg font-semibold'>Download The App</span>

                        <ul className='lg:text-right text-left flex lg:justify-end justify-start gap-3'>
                            <li
                            ><Link href={''}>
                                    <Image alt='play-store' src={'https://www.nifafinearts.com/images/gplay.png'} width={150} height={150} />
                                </Link>
                            </li>

                            <li
                            ><Link href={''}>
                                    <Image alt='play-store' src={'https://www.nifafinearts.com/images/appstore.png'} width={150} height={150} />
                                </Link>
                            </li>
                        </ul>

                        <span className='text-black/80 font-light'>© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer