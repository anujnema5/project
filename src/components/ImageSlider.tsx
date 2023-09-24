"use client"
import React, { useState, useEffect, useRef } from 'react';
import { coverImages as images } from '@/data/images';
import Image from 'next/image';
import Rightarrow from './SVGS/Rightarrow';
import Leftarrow from './SVGS/Leftarrow';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); 

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handlePrevButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current); 
    }
    startInterval(); 
  };

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current); 
    }
    startInterval(); 
  };

  return (
    <div className="image-slider flex relative ">
      <button className='absolute lg:left-5 left-3 top-[50%] -translate-y-1/2	-translate-x-1/2	' onClick={handlePrevButtonClick}>
        <Leftarrow />
      </button>
      <Image src={images[currentIndex].src} alt='cover-images' className='transition-all w-full h-full duration-500 opacity-100 ease-in-out' width={5000} height={5000} />
      <button className='absolute right-0 top-[50%] -translate-y-1/2	.-translate-x-1/2	' onClick={handleNextButtonClick}>
        <Rightarrow />
      </button>
    </div>
  );
};

export default ImageSlider;
