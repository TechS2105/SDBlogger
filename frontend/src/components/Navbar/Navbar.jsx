import React from 'react';
import NavbarStyle from '../../../public/styles/navbar style folder/Navbar.module.css';
import { TiArrowRightOutline } from "react-icons/ti";

function Navbar(){
    
    return(
        
        <>
        
            {/** Navbar */}
            <header>

                {/** Desktop & Tablet Navbar */}
                {/** Inner Nav */}
                <div className={NavbarStyle.innerNav}>

                    {/** Logo  */}
                    <div className={NavbarStyle.logo}>

                        <h1> Daily<span>Blog</span></h1>

                    </div>

                    {/** Nav */}
                    <div className={NavbarStyle.navSection}>

                        {/** Desktop & Tablet Nav */}
                        <nav>

                            <ul>

                                <li><a href="#">Home</a></li>
                                <li><a href="#">Articles</a></li>
                                <li><a href="#">Category</a></li>
                                <li><a href="#">About</a></li>

                            </ul>

                        </nav>

                    </div>

                    {/** Cotact Section */}
                    <div className={NavbarStyle.contactSection}>

                        {/** Contact Page Button */}
                        <button> Let's Talk <TiArrowRightOutline /> </button>

                    </div>

                </div>

                {/** Mobile Navbar */}
                <div className={NavbarStyle.innerMobileNav}>

                    {/** Logo Div */}
                    <div className={NavbarStyle.mobileNavLogo}>

                        <h1> Daily<span>Blog</span> </h1>

                    </div>

                    {/** Mobile Nav */}
                    <div className={NavbarStyle.innerMobileNav}>

                        {/** Nav Span Icon */}
                        <div className={NavbarStyle.mobileNavSpanIcon}>

                            <span></span>
                            <span></span>

                        </div>

                    </div>

                </div>

            </header>

        </>

    );

}

export default Navbar;