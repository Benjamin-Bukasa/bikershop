import React from 'react';
import Carousel from './Carousel';
import BannerText from './BannerText';

const Banner = () => {
  return (
    <>
      <section className={`flex flex-col gap-20 pt-32 px-4 md:flex-row md:items-center md:pt-44 md:px-40 md:pb-20 md:gap-10 xl:px-40 `}>
       <BannerText/> 
       <Carousel/> 
      </section>
    </>
  );
}

export default Banner;
