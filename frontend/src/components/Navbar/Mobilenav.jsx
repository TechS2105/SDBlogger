import React from 'react';
import MobileNavLogoSection from '../Navbar/Mobilelogosection';
import MobileNavMenuToggleSVG from '../Navbar/Mobilenavmenutogglesvg';
import MobileNavMenuSection from '../Navbar/Mobilenavmenusection';

function Mobilenav({NavbarStyle, firstSpan, secondSpan, handleSpanSVG, handleMobileNavMenu, Navigate, NavLink, LogoNavigate}){

    return(

        <>
        
            {/** Mobile Nav */}
            <div className={NavbarStyle.innerMobileNav}>
            
                {/** Logo Div */}
                <MobileNavLogoSection
                
                    NavbarStyle={NavbarStyle}
                    logoname1="Daily"
                    logoname2="Blog"
                    LogoNavigate={LogoNavigate}

                />
            
                {/** Mobile Nav Toggle SVG Icon Section */}
                <MobileNavMenuToggleSVG 
                
                    NavbarStyle={NavbarStyle}
                    firstSpan={firstSpan}
                    secondSpan={secondSpan}
                    handleSpanSVG={handleSpanSVG}

                />
            
                {/** Mobile Nav Menu Section */}
                <MobileNavMenuSection 
                
                    NavbarStyle={NavbarStyle}
                    handleMobileNavMenu={handleMobileNavMenu}
                    Navigate={Navigate}
                    NavLink={NavLink}

                />
            
            </div>

        </>

    );

}

export default Mobilenav;