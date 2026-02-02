import React from 'react';

function Thirdblogtitlesection({thirdBlogMainTitle, HomeStyle}){

    return(

        <>
        
            {/** Title Section */}
            <div className={HomeStyle.thirdBlogTitleSection}>
            
                <h2>{thirdBlogMainTitle}</h2>
            
            </div>

        </>

    );

}

export default Thirdblogtitlesection;