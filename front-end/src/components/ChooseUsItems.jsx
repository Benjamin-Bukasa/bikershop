import React from 'react'

const ChooseUsItems = ({icon, title, description}) => {
  return (
    <>
        
            <div className="bg-white dark:bg-zinc-950 rounded-lg shadow-lg flex flex-col justify-center items-center gap-5 py-10 text-center">
                <div className="w-20 h-20 flex justify-center items-center text-red-600 rounded-full bg-red-200">
                    {icon}
                </div>
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="w-2/3">{description}</p>
            </div>
        
            
    </>
  )
}

export default ChooseUsItems