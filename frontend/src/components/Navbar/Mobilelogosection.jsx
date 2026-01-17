import React from 'react';

function Mobilelogosection({NavbarStyle, logoname1, logoname2, LogoNavigate}){

    return(

        <>
        
            {/** Mobile Logo Section */}
            <div className={NavbarStyle.mobileNavLogo}>
            
                <h1 onClick={LogoNavigate}> {logoname1}<span>{logoname2}</span> </h1>
            
            </div>


        </>

    );

}

export default Mobilelogosection;