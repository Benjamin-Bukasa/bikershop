import React from 'react'
import MotoItems from './MotoItems'

const OurMotos = () => {
  return (
    <>
        <div className="py-20 flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-5xl text-center font-bold mb-6"><span className="bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 bg-clip-text text-transparent md:font-bold">
                Nos motos{" "} 
            </span>
            disponibles
            </h2>
            <div className="w-1/6 h-2 bg-red-500"></div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
                <MotoItems/> 
            </div>
        </div>
    </>
  )
}

export default OurMotos