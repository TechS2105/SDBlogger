import React from 'react';
import LatestPostMainSectionSwiperContainer from './Latestpostmainsectionswipercontainer';

function Latestpostmainsection({HomeStyle}){

    return(

        <>
        
            {/** Latest Post Main Section  */}
            <div className={HomeStyle.latestPostInnerMainSection}>

                {/** Swiper Container */}
                <LatestPostMainSectionSwiperContainer
                
                    HomeStyle={HomeStyle}

                />

            </div>

        </>

    );

}

export default Latestpostmainsection;