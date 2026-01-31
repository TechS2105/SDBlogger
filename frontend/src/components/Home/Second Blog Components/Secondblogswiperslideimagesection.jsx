import React from 'react';

function Secondblogswiperslideimagesection({HomeStyle,blogItems}){

    return(

        <>
        
            {/** Swiper Slide Image Section */}
            <div className={HomeStyle.secondBlogSwiperSlideImagebox}>

                {/** Image Overlay */}
                <div className={HomeStyle.secondBlogSwiperSlideImageOverlay}></div>
                <img src={blogItems.blogImage} alt={blogItems.blogImageAltText} />

            </div>

        </>

    );

}

export default Secondblogswiperslideimagesection;