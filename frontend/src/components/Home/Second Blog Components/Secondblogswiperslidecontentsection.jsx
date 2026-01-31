import React from 'react';

function Secondblogswiperslidecontentsection({HomeStyle, configureParaStyle, configureSpanStyle, configureTitleStyle, blogItems}){

    return(

        <>
        
            {/** Second Blog Swiper Slide Content Section */}
            <div className={HomeStyle.secondBlogSwiperSlideContentBox}>

                {/** Inner Content Box  */}
                <div className={HomeStyle.secondBlogSwiperSlideInnerContentBox}>

                    <span style={configureSpanStyle}>{blogItems.blogDate} / {blogItems.authorName}</span>
                    <h2 style={configureTitleStyle}>{blogItems.frontView[0].blogFrontViewMainTitle}</h2>
                    <p style={configureParaStyle}>{blogItems.frontView[0].blogFrontViewShortDes.length > 20 ? blogItems.frontView[0].blogFrontViewShortDes.slice(0, 150) : blogItems.frontView[0].blogFrontViewShortDes}...</p>

                </div>

            </div>

        </>

    );

}

export default Secondblogswiperslidecontentsection;