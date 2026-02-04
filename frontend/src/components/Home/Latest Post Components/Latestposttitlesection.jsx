import React from 'react';

function Latestposttitlesection({HomeStyle, hoverableArrow, defaultArrow, articleNavigation, buttonText}){

    return(

        <>
        
            {/** Title Section */}
            <div className={HomeStyle.latestPostTitleSection}>
            
                <h2> Latest Post </h2>
                <button onClick={articleNavigation}><span>{buttonText}</span> {defaultArrow} {hoverableArrow}</button>
            
            </div>

        </>

    );

}

export default Latestposttitlesection;