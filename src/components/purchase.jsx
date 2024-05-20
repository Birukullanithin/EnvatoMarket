import React from "react";
import "./nav.css";
import Button from "./button";
import image5 from "../assets/image5.png";

function Purchase() {
    return (
        <div className="purchase">
            <div className="purchase-text">
                <h1>
                    Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
                </h1>
                <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                <Button backgroundColor="linear-gradient(to right, #ff7e5f, #8b5cf6)" px="10px" py="15px">
                Purchase From Envato
                </Button>
            </div>
            <div className="purchase-image">
                <img src={image5} alt="Motion Art" />
            </div>
        </div>
    );
}

export default Purchase;
