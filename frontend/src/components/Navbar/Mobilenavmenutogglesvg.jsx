import React from 'react';

function Mobilenavmenutogglesvg({NavbarStyle, firstSpan, secondSpan, handleSpanSVG}){

    return(

        <>
        
            {/** Mobile Menu Toggle SVG Icon Section */}
            <div className={NavbarStyle.innerMobileNav}>
            
                {/** Nav Span Icon */}
                <div className={NavbarStyle.mobileNavSpanIcon} onClick={handleSpanSVG}>
            
                    <span style={firstSpan}></span>
                    <span style={secondSpan}></span>
            
                </div>
            
            </div>

        </>

    );

}

export default Mobilenavmenutogglesvg;