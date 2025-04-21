import React from 'react';
import Navbar from './Navbar/Navbar';
import Logo from "../components/Logo"
import MenuHamb from './MenuHamb';

const Header = () => {
  return (
    <header className='w-full bg-white py-4 px-1 fixed top-0 left-0 shadow-md z-50 border flex flex-row justify-between items-center gap-4 2xs:max-xs:justify-around sm:w-full lg:w-full sm:flex-row sm:justify-between sm:items-center lg:px-44 lg:flex-row lg:justify-between lg:items-center'>
        <Logo/>
        <Navbar/>
        <MenuHamb/>
    </header>
  );
}

export default Header;
