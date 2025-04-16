import React from 'react';
import {Link} from 'react-router-dom'

import { NavLinks } from '../../services/NavLinks';


const Navbar = () => {
  return (
    <nav className=''>
        <ul>
            {
                NavLinks.map((item)=>(
                    <Link to={item.link}><li key={item.id}>{item.title}</li></Link>
                )) 
            }
        </ul>
    </nav>
  );
}

export default Navbar;
