import React from 'react'; 

function Secondblogparentcontainer({HomeStyle}){

    return(

        <>
        
            {/** Second Blog Parent Container */}
            <div className={HomeStyle.secondBlogParentSection}>

                {/** Inner Section */}
                <div className={HomeStyle.secondBlogInnerSection}>

                    {/** Swiper Container */}
                    <div className={HomeStyle.secondBlogSwiperContainer}>

                        {/** Swiper Slide Container */}
                        <div className={HomeStyle.secondBlogSwiperSlideContainer}>

                            {/** Category Box */}
                            <div className={HomeStyle.secondBlogCategoryBox}>

                                <span> Technology </span>

                            </div>

                            {/** Image Box */}
                            <div className={HomeStyle.secondBlogImageBox}>

                                {/** Image Overlay */}
                                <div className={HomeStyle.secondBlogImageOverlay}></div>
                                <img src="../../../public/images/Science/science_blog_image1.jpeg" alt="" />

                            </div>

                            {/** Blog Details Box */}
                            <div className={HomeStyle.secondBlogDetailsBox}>

                                <i><span>Aug 26, 2026</span> / <span>Mohini Agarwal</span></i>
                                <h3> The Future of Streaming: What to Expect From Movies and TV in 2025 </h3>
                                <p>Streaming is transforming how we watch movies and TV. Explore trends shaping 2025, including personalized content, interactive shows, and AI-driven recommendations for viewers worldwide.</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Secondblogparentcontainer;