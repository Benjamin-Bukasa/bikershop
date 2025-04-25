import React from 'react';
import {Search}  from 'lucide-react';



const SearchForm = () => {

  
  return (
    <>
        <form className={`flex justify-between px-2 py-0 rounded-md border 2xs:max-xs:w-52 xs:w-72 xs:max-md:w-72 dark:border-gray-100/15 xs:max-xsm:w-64 sm:max-[979px]:w-[320px] `}>
        <input type="text" placeholder='Recherche...' className='outline-none 2xs:max-xs:w-full xs:max-md:w-80  md:flex-1 bg-transparent'/>
        <button className='w-10 h-10 flex justify-center items-center'>
            <Search />
        </button>
        </form>
    </>
  );
}

export default SearchForm;
