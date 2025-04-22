import React from 'react';
import Carousel from './Carousel';
import BannerText from './BannerText';

const Banner = () => {
  return (
    <>
      <section className={`flex flex-col gap-20 pt-32 px-4 md:flex-row md:items-center md:pt-44 md:px-44 md:pb-5 md:gap-10`}>
       <BannerText/> 
       <Carousel/> 
      </section>
    </>
  );
}

export default Banner;
