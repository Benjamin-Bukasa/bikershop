import React from 'react';

const Logo = () => {
  return (
    <div className={`flex justify-center items-center text-xl font-bold italic uppercase font-poppins sm:text-4xl md:text-4xl`}>
      <span className='text-[#121212] dark:text-[#fff] font-black'>Bike</span>
      <span className='font-black text-red-500'>Shop</span>
    </div>
  );
}

export default Logo;
