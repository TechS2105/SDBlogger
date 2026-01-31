import React from 'react';
import { LuLoader } from "react-icons/lu";
import { PiMaskSad } from "react-icons/pi";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { LiaArrowRightSolid } from "react-icons/lia";
import SecondBlogSwiperContainer from './Secondblogswipercontainer';

function Secondblogparentcontainer({HomeStyle}){

    return(

        <>
        
            {/** Second Blog Section */}
            <div className={HomeStyle.secondBlogParentSection}>

                {/** Second Blog Inner Section */}
                <SecondBlogSwiperContainer
                
                    HomeStyle={HomeStyle}
                    blogLoaderIcon={<LuLoader/>}
                    blogErrorIcon={<PiMaskSad/>}
                    blogErrorMessage="Something went wrong..."
                    swiperLeftArrow={<LiaArrowLeftSolid/>}
                    swiperRightArrow={<LiaArrowRightSolid/>}

                />

            </div>

        </>

    );

}

export default Secondblogparentcontainer;