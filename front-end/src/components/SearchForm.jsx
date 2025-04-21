import React from 'react';
import {Search}  from 'lucide-react';



const SearchForm = () => {

  
  return (
    <>
        <form className={`flex justify-start px-2 py-2 rounded-md border 2xs:max-xs:w-52 xs:w-72 xs:max-md:w-72 dark:border-gray-100/15 xs:max-xsm:w-64`}>
        <input type="text" placeholder='Recherche...' className='outline-none 2xs:max-xs:w-full xs:max-md:w-full bg-transparent'/>
        <button className=''>
            <Search />
        </button>
        </form>
    </>
  );
}

export default SearchForm;
