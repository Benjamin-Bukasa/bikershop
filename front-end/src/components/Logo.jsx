import React from 'react';

const Logo = () => {
  return (
    <p className={`flex justify-center items-center text-base font-bold font-poppins sm:text-4xl md:text-4xl`}>
      <span className='font-semibold'>Bike</span>
      <span className='font-semibold text-red-500'>Store</span>
    </p>
  );
}

export default Logo;
