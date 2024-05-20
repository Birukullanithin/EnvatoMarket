
import React from "react";
import Images from "./imagereturn";
import image9 from "../assets/image9.png"
import image10 from "../assets/image10.png"
import image11 from "../assets/image11.png"

function Footerup(){
    return(
        <div className="footerup">
            <div className="footerupbox"><Images img1={image11}></Images>
            <h1>Light Weight</h1>
            <p>Motion Art for Elementor is designed to be lightweight.</p>
            </div>
            <div className="footerupbox"><Images img1={image9}></Images>
            <h1>100% Responsive</h1>
            <p>Create a consistent visual experience across all devices.</p>
            
            </div>
            <div className="footerupbox"><Images img1={image10}></Images>
            <h1>User Friendly Interface</h1>
            <p>Ensure a smooth experience for both applicants and administrators.</p>
            </div>
        </div>
    )
}

export default Footerup;