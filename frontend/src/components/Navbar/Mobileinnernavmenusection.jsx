import React from 'react';

function Mobileinnernavmenusection({NavbarStyle, link1, link2, link3, link4, NavLink}){

    return(

        <>
        
            {/** Inner Nav Menu Section */}
            <div className={NavbarStyle.navMenuDiv}>
                        
                <nav>
                        
                    <ul>
                        
                        <li><NavLink to="/"> {link1} </NavLink></li>
                        <li><NavLink to="/articles"> {link2} </NavLink></li>
                        <li><NavLink to="/category"> {link3} </NavLink></li>
                        <li><NavLink to="/about"> {link4} </NavLink></li>
                        
                    </ul>
                        
                </nav>
                        
            </div>

        </>

    );

}

export default Mobileinnernavmenusection;