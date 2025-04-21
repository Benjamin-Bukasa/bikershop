import React from 'react';
import {Search}  from 'lucide-react';



const SearchForm = () => {

  
  return (
    <>
        <form className={`flex justify-start px-2 py-2 rounded-md border-2 2xs:max-xs:w-56`}>
        <input type="text" placeholder='Recherche...' className='outline-none 2xs:max-xs:w-full'/>
        <button className=''>
            <Search />
        </button>
        </form>
    </>
  );
}

export default SearchForm;
