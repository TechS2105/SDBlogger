import React from 'react';

function Secondblogswiperslidenavigationarrowbox({HomeStyle, prev, next}){

    return(

        <>
        
            {/** Swiper Navigation Arrow Box */}
            <div className={HomeStyle.secondBlogSwiperSlideNavigationArrowBox}>

                {/** Inner Navigation Arrow Box */}
                <div className={HomeStyle.secondBlogSwiperSlideInnerNavigationArrowBox}>

                    <span id={prev}>Previous</span>
                    <span id={next}>Next</span>

                </div>

            </div>

        </>
        
    );

}

export default Secondblogswiperslidenavigationarrowbox;