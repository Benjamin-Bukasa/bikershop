import React from 'react';
import Carousel from './Carousel';
import BannerText from './BannerText';

const Banner = () => {
  return (
    <>
      <section className={`flex flex-col gap-12 mt-18 py-32 px-4 md:flex-row md:items-center md:pt-52 md:px-44 md:gap-10`}>
       <BannerText/> 
       <Carousel/> 
      </section>
    </>
  );
}

export default Banner;
