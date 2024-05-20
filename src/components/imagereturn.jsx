import React from "react";
import "./imagereturn.css"

function Images({img1,img2,children}){
    return(
      <div className="imagediv">
        <img src={img1} alt="" />
        <div> 
            <img src={img2} alt="" />
            <p className="p">{children}</p>
        </div>
       
      </div>
    );
}

export default Images;