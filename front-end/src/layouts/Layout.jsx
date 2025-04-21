import React from 'react';
import { Outlet } from 'react-router-dom';



// import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';


const Layout = () => {


  return (
    <>
      {/* <Navbar/> */}
      <Header/>
      <main className="px-5">
        {<Outlet/>}
      </main>
      <Footer/>
    </>
  );
}

export default Layout;
