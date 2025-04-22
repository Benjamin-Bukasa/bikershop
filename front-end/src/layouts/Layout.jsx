import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useToggleNav } from '../utils/store';
import useThemeStore from '../utils/store'



// import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';


const Layout = () => {

  const {open,setOpen} = useToggleNav()
  const handleClick = () => {
    if (open) {
      setOpen(false);
    } 
  };

  const { theme } = useThemeStore()
  
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="bg-[#fff] dark:bg-stone-950 text-[#121212] dark:text-[#f0f0f0]">
      {/* <Navbar/> */}
      <Header/>
      
      <main onClick={handleClick} className="flex flex-col gap-20 md:flex md:flex-col md:gap-10">
        {<Outlet/>}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
