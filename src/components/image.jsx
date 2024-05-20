import React from "react";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import Images from "./imagereturn";

function Image(){
    return(
      
      <div className="imagediv1">
       <Images img1={image1} img2={image4} >4.5 Score, 9 Reviews</Images>
     
       <Images img1={image2} img2={image4}> 4.5 Score, 9 Reviews</Images>
     
       <Images img1={image3} img2={image4} >4.5 Score, 9 Reviews</Images>
      
      </div>
    );
}

export default Image;