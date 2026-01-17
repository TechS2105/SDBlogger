import React from 'react';
import MobileInnerNavMenuSection from '../Navbar/Mobileinnernavmenusection';
import { IoArrowRedoSharp } from "react-icons/io5";
import MobileInnerMenuLetsTalkSection from '../Navbar/Mobileinnermenuletstalksection';

function Mobilenavmenusection({NavbarStyle, handleMobileNavMenu, NavLink, Navigate}){

    return(

        <>

            {/** Mobile Nav Menu Section */}
            <div className={NavbarStyle.mobileNavMenuSection} style={handleMobileNavMenu}>
                        
                {/** Inner Nav Menu Div */}
                <MobileInnerNavMenuSection 
                
                    NavbarStyle={NavbarStyle}
                    link1="Home"
                    link2="Articles"
                    link3="Category"
                    link4="About"
                    NavLink={NavLink}

                />
                        
                {/** Inner Let's Talk Div */}
                <MobileInnerMenuLetsTalkSection
                
                    NavbarStyle={NavbarStyle}
                    buttonText="Let's Talk"
                    buttonSVG={<IoArrowRedoSharp/>}
                    Navigate={Navigate}

                />
                        
            </div>


        </>

    );

}

export default Mobilenavmenusection;