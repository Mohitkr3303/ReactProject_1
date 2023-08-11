import React from 'react';
import "../Style/Header.scss";
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
   <>
  <nav>
    <h1>TECHYSTAR</h1>
    <main>
    <HashLink to={"/#home"}>Home</HashLink>
    <HashLink to={"/#about"}>About Us</HashLink>
    <HashLink to={"/contact"}>Contact Us</HashLink>
    <HashLink to={"/service"}>Service</HashLink>
    <HashLink to={"/#brands"}>Brands</HashLink>
    </main>
  </nav>
   </>
  )
}

export default Header;