import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
export default function Navbar() {
  return (
    <div>
     <ul>
        <NavLink to='/' activeClassName="active_styles" exact> <li>Home</li> </NavLink>
        <NavLink to='/about' activeClassName="active_styles" exact> <li>About</li> </NavLink>
        <NavLink to='/contact' activeClassName="active_styles" exact> <li>Contact</li> </NavLink>
        <NavLink to='/services' activeClassName="active_styles" exact> <li>Services</li> </NavLink>
     </ul>
    </div>
  )
}
