import React from 'react';

function Desktopnavcontactbuttonsection({NavbarStyle, buttonName, buttonSVG, Navigate}){

    return(

        <>
        
            {/** Desktop Nav Contact Button Section */}
            <div className={NavbarStyle.contactSection}>
            
                    {/** Contact Page Button */}
                    <button onClick={Navigate}> {buttonName} {buttonSVG} </button>
            
            </div>

        </>

    );

}

export default Desktopnavcontactbuttonsection;