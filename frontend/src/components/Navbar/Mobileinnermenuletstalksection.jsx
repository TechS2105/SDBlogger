import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import MobileInnernavMenuLetsTalkSectionSocialIcons from '../Navbar/Mobileinnernavmenuletstalksectionsocialicons'; 

function Mobileinnermenuletstalksection({NavbarStyle, buttonText, buttonSVG, Navigate}){

    return(

        <>
        
            {/** Mobile Menu Inner Talk Section */}
            <div className={NavbarStyle.letsTalkDiv}>
                        
                <button onClick={Navigate}> {buttonText} {buttonSVG} </button>
                        
                {/** Social Icon Div */}
                <MobileInnernavMenuLetsTalkSectionSocialIcons 
                
                    NavbarStyle={NavbarStyle}
                    svg1={<FaFacebookF/>}
                    svg2={<FiInstagram/>}
                    svg3={<FaLinkedinIn/>}
                    svg4={<BsTwitterX/>}

                />
                        
            </div>

        </>

    );

}

export default Mobileinnermenuletstalksection;