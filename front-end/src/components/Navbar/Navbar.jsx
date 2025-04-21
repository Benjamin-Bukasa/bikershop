// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLinks } from '../../services/NavLinks';
import { useToggleNav } from '../../utils/store';
import Logo from '../Logo';

const Navbar = () => {

  const {open,setOpen} = useToggleNav()
  const handleOpen = ()=> setOpen(open)
  
  return (
    <nav className={`fixed top-0 left-0 z-50 w-2/3 h-full py-3 bg-[#121212EE] text-white transition-all duration-300
      ${open ? 'translate-x-0' : '-translate-x-full'} 
      md:static md:translate-x-0 md:w-auto md:h-auto md:bg-transparent md:text-[#121212]`}>
      <div className="md:hidden">
        <Logo/>
      </div>
      <ul className="flex flex-col gap-8 p-4 md:flex-row md:gap-4 md:p-0">
        {NavLinks.map((item) => (
          <li className={` px-4`} key={item.id}>
            <Link
              to={item.link}
              className="" onClick={handleOpen}
            >
              {item.title}
            </Link>
          </li> 
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
