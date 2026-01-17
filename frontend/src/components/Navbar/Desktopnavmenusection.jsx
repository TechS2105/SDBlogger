import React from 'react';

function Desktopnavmenusection({NavbarStyle, link1, link2, link3, link4, NavLink}){

    return(

        <>
        
            {/** Desktop Nav Menu Section */}
             <div className={NavbarStyle.navSection}>
            
                {/** Desktop & Tablet Nav */}
                <nav>
            
                    <ul>
            
                        <li><NavLink to="/">{link1}</NavLink></li>
                        <li><NavLink to="/articles">{link2}</NavLink></li>
                        <li><NavLink to="/category">{link3}</NavLink></li>
                        <li><NavLink to="/about">{link4}</NavLink></li>
            
                    </ul>
            
                </nav>
            
            </div>

        </>

    );

}

export default Desktopnavmenusection;