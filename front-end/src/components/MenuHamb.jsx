import React from 'react';
import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import SearchForm from './SearchForm';
import { useToggleNav } from '../utils/store';

const MenuHamb = () => {

  const {open,setOpen} = useToggleNav()

  const handleClick = () => {
    setOpen(); 
  };


  return (
    <div className="flex justify-between items-center gap-1 2xs:max-xs:flex-1 2xs:max-xs:justify-between ">
      <SearchForm/>
      <button onClick={handleClick} className='p-2 border dark:border-gray-100/15 rounded-md md:hidden transition-all duration-150'>{open?
        <X />:
        <AlignJustify 
        className=""/>}</button>
    </div>
    
  );
};

export default MenuHamb;
