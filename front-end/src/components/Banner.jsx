import React from 'react';
import Carousel from './Carousel';
import BannerText from './BannerText';

const Banner = () => {
  return (
    <>
      <section className={`flex flex-col mt-20 py-8 md:flex-row md:p-40 md:gap-8`}>
       <BannerText/> 
       <Carousel/> 
      </section>
    </>
  );
}

export default Banner;
