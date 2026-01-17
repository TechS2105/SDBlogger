import React from 'react';
import DesktopNavLogoSection from '../Navbar/Desktopnavlogosection';
import DesktopNavMenuSection from '../Navbar/Desktopnavmenusection';
import DesktopNavContactButtonSection from '../Navbar/Desktopnavcontactbuttonsection';
import { TiArrowRightOutline } from "react-icons/ti";

function Desktopnav({NavbarStyle, NavLink, Navigate, LogoNavigate}){

    return(

        <>
        
            {/** Desktop Navbar */}
            <div className={NavbarStyle.innerNav}>
            
                {/** Logo  */}
                <DesktopNavLogoSection 
                
                    NavbarStyle={NavbarStyle}
                    logoname1="Daily"
                    logoname2="Blog"
                    LogoNavigate={LogoNavigate}

                />
            
                {/** Nav */}
                <DesktopNavMenuSection 
                
                    NavbarStyle={NavbarStyle}
                    link1="Home"
                    link2="Articles"
                    link3="Category"
                    link4="About"
                    NavLink={NavLink}

                />
            
                {/** Cotact Section */}
                <DesktopNavContactButtonSection 
                
                    NavbarStyle={NavbarStyle}
                    buttonName="Let's Talk"
                    buttonSVG={<TiArrowRightOutline/>}
                    Navigate={Navigate}

                />
            
            </div>

        </>

    );

}

export default Desktopnav;