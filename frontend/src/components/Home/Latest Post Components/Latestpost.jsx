import React from 'react';
import LatestPostInnerContainer from './Latestpostinnercontainer';

function Latestpost({HomeStyle}){


    return(

        <>
        
            {/** Latest Post Parent Section */}
            <div className={HomeStyle.latestPostParentContainer}>

                {/** Latest Post Inner Container */}
                <LatestPostInnerContainer
                
                    HomeStyle={HomeStyle}

                />

            </div>

        </>

    );

}

export default Latestpost;