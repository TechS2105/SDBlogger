import React from 'react';
import { LiaArrowLeftSolid } from "react-icons/lia";
import { LiaArrowRightSolid } from "react-icons/lia";

function Secondblogswiperslideresponsivenavigationarrowbox({HomeStyle, prev, next, swiperLeftArrow, swiperRightArrow}){

    return(

        <>
        
            {/** Second Blog Swiper Slide Mobile View Navigation Arrow Box */}
            <div className={HomeStyle.secondBlogSwiperSlideMobileViewNavigationArrowBox}>

                {/** Second Blog Swiper Slide Mobile View Inner Navigation Arrow Box */}
                <div className={HomeStyle.secondBlogSwiperSlideMobileViewInnerNavigationArrowBox}>

                    <span id={prev}>{swiperLeftArrow}</span>
                    <span id={next}>{swiperRightArrow}</span>
                                
                </div>

            </div>

        </>

    );

}

export default Secondblogswiperslideresponsivenavigationarrowbox;