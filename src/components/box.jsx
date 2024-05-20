import React from "react";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";


function Box() {
  return (
    <div className="boxs">
      <div className="innerbox innerbox1">
        <h1>Apply On Section</h1>
        <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
        <img src={image7} alt="Apply On Section" className="image" />
      </div>
      <div className="innerbox innerbox2">
        <h1>Apply On Page</h1>
        <p>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
        <img src={image6} alt="Apply On Page" className="image" />
      </div>
    </div>
  );
}

export default Box;
