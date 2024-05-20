import React from "react";
import './nav.css';
import Button from "../components/button";

import logo1 from '../assets/logo1.png';
function Navbar() {
  return(
    <div className="nav">
        <div className="innerdiv">
            <img src={logo1} alt="logo" className="logo"/>
            <h1>
                <span class="envato">envato</span>
                <span class="market">market</span>
            </h1>
        </div>
        <Button backgroundColor= "#82B440"
            color= "#fff" fontWeight="300">Buy Now </Button>
    </div>
  );
}

export default Navbar;