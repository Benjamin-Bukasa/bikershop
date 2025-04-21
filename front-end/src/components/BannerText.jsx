import React from 'react';

const BannerText = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center gap-6 text-center md:w-1/2 md:items-start md:text-left md:gap-10">
      <h1 className="font-bold text-4xl leading-[40px] md:text-7xl">
          Procure-toi un{" "}
          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Special Bike
          </span>
      </h1>

            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus officiis laudantium maiores amet quis, veritatis magni id mollitia sequi molestias!</p>
            <div className="w-full px-5 flex flex-col justify-center items-center gap-4 md:px-0 md:flex md:flex-row">
                <button className='w-full px-5 py-4  bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-white hover:shadow-md hover:shadow-current '>Acheter Maintenant</button>
                <button className='w-full px-5 py-4 border bg-zinc-300'>Pacourir Nos Modèles</button>
            </div>
        </div>
    </>
  );
}

export default BannerText;
