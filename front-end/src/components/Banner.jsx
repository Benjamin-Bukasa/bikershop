import React from 'react';
import Carousel from './Carousel';
import BannerText from './BannerText';

const Banner = () => {
  return (
    <>
      <section className={`flex flex-col mt-24 py-10`}>
       <BannerText/> 
       <Carousel/> 
      </section>
    </>
  );
}

export default Banner;
