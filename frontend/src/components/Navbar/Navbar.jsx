import React, {useState} from 'react';
import NavbarStyle from '../../../public/styles/navbar style folder/Navbar.module.css';
import DesktopNav from '../Navbar/Desktopnav';
import MobileNav from '../Navbar/Mobilenav';
import {NavLink, useNavigate} from 'react-router-dom';

function Navbar(){
    
    const navigate = useNavigate();

    const [isFirstSpanStyleActive, setIsFirstSpanStyleActive] = useState(false); // Mobile Nav First SVG Span
    const [isSecondSpanStyleActive, setIsSecondSpanStyleActive] = useState(false); // Mobile Nav Second SVG Span
    const [isActiveHandleMobileNavMenu, setIsActiveHandleMobileNavMenu] = useState(false); // Mobile Nav Menu Section
    
    function handleSpanSVG(){
        
        setIsFirstSpanStyleActive(prev => !prev); // Add toggle animation in the mobile First SVG Span
        setIsSecondSpanStyleActive(prev => !prev); // Add toggle animation in the mobile Seocnd SVG Span
        setIsActiveHandleMobileNavMenu(prev => !prev); // Add toggle animation in the mobile nav menu section

    }

    /** Mobile Menu First SVG Span */
    const firstSpan = isFirstSpanStyleActive ? {

        transform: "rotate(-50deg) translateY(5px)",
        width: '50px',
        height: '5px',
        transition: "all 0.8s ease 0.5s",
        backgroundColor: 'var(--hex_color5)'

    } : {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease"

    }

    /** Mobile Menu Second SVG Span */
    const secondSpan = isSecondSpanStyleActive ? {

        transform: "rotate(-150deg) translate(10px, -5px)",
        transition: "all 0.8s ease 0.5s",
        width: '40px',
        height: '3px',

    } : {

        transform: "rotate(0deg)",
        transition: 'all 0.8s ease'

    }

    /** Mobile Nav Menu Section */
    const handleMobileNavMenu = isActiveHandleMobileNavMenu ? {

        transform: 'translateX(0px)',
        transition: "all 0.8s ease"

    } : {

        transform: 'translateX(-1000px)',
        transition: "all 0.8s ease"

    }

    return(
        
        <>
        
            {/** Navbar */}
            <header>

                {/** Desktop & Tablet Navbar */}
                <DesktopNav 
                
                    NavbarStyle={NavbarStyle}
                    NavLink={NavLink}
                    Navigate={() => (navigate('/contact'))}
                    LogoNavigate={() => (navigate('/'))}

                />

                {/** Mobile Navbar */}
                <MobileNav
                
                    NavbarStyle={NavbarStyle}
                    handleSpanSVG={handleSpanSVG}
                    firstSpan={firstSpan}
                    secondSpan={secondSpan}
                    handleMobileNavMenu={handleMobileNavMenu}
                    NavLink={NavLink}
                    Navigate={() => (navigate('/contact'))}
                    LogoNavigate={() => (navigate('/'))}

                />

            </header>

        </>

    );

}

export default Navbar;