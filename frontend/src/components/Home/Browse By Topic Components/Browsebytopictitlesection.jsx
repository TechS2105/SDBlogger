import React from 'react';

function Browsebytopictitlesection({topicTitle, HomeStyle}){

    return(

        <>
        
            {/** Browse By Topic Title Section */}
             <div className={HomeStyle.browseByTopicTitleContainer}>

                <h2> {topicTitle} </h2>

            </div>

        </>

    );

}

export default Browsebytopictitlesection;