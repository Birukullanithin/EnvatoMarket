import React from "react";
import Button from "./button";
import './navdown.css';

import MotionArtEffect from "../assets/MotionArtEffect.png"

function Navdown(){
    return(
        <div className="navdown">
           <img src={MotionArtEffect} alt="Motion" />
           <Button className="btns"  backgroundColor= "#ffff"
            color= "black" px="20px" py="20px"  fontWeight={200} fontSize="26px" > 
                Purchase Now
           </Button>

        </div>
    );
}

export default Navdown;