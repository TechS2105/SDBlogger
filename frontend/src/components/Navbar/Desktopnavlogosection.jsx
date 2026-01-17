import React from 'react';

function Desktiopnavlogosection({logoname1, logoname2, NavbarStyle, LogoNavigate}){

    return(

        <>
        
            {/** Desktop Nav Logo Section */}
            <div className={NavbarStyle.logo}>
            
                <h1 onClick={LogoNavigate}> {logoname1}<span>{logoname2}</span></h1>
            
            </div>

        </>

    );

}

export default Desktiopnavlogosection;