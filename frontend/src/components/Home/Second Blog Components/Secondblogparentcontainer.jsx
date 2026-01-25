import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllBlogContents} from '../../../features/Blog Contents/BlogContentSlice';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation} from 'swiper/modules';
import { LuLoader } from "react-icons/lu";
import { PiMaskSad } from "react-icons/pi";

function Secondblogparentcontainer({HomeStyle}){
    
    const {items: blogs, status} = useSelector((state) => state.blogContent);
    const dispatch = useDispatch();

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchAllBlogContents());

        }

    }, [status, dispatch]);

    if(status === 'loading'){

        return(

            <div className={HomeStyle.loadingSection}>

                <LuLoader />

            </div>

        );

    }

    if(status === 'failed'){

        return(

            <div className={HomeStyle.failedMessageSection}>

                <PiMaskSad />
                <p> Something went wrong, please try again later... </p>

            </div>

        );

    }

    return(

        <>
        
            {/** Second Blog Container */}
            <div className={HomeStyle.homeSecondBlogContainer}>

                {/** Swiper Container */}
                <Swiper 

                    speed={1000}
                    loop={true}
                    slidesPerView={1}
                    navigation={{

                        nextEl: '#next',
                        prevEl: '#prev' 

                    }}

                    modules={[Navigation]}
                    className={HomeStyle.homeSwiperContainer}
                    
                >

                    {/** Swiper Slide Container */}
                    {blogs.map((blogItem) => {

                        return(

                            <SwiperSlide className={HomeStyle.homeSwiperSlideContainer}>

                                {/** Blog Category */}
                                <div className={HomeStyle.homeSwiperSlideBlogCateogry}>

                                    <span> {blogItem.blogCategory} </span>

                                </div>

                                {/** Image Section */}
                                <div className={HomeStyle.homeSwiperSlideImageContainer}>

                                    {/** Image Overlay */}
                                    <div className={HomeStyle.homeSwiperSlideImageOverlay}></div>
                                    <img src={blogItem.blogImage} alt={blogItem.blogImageAltText} />

                                </div>
                                
                                {/** Blog Content Section */}
                                <div className={HomeStyle.homeSwiperSlideBlogTextContainer}>

                                    {/** Inner Content Box */}
                                    <div className={HomeStyle.homeSwiperSlideInnerBlogBox}>

                                        <b><span>{blogItem.blogDate}</span> / <span>{blogItem.authorName}</span></b>
                                        <h2>{blogItem.frontView[0].blogFrontViewMainTitle}</h2>
                                        <p>{blogItem.frontView[0].blogFrontViewShortDes.length > 20 ? blogItem.frontView[0].blogFrontViewShortDes.slice(0, 200) : blogItem.frontView[0].blogFrontViewShortDes}...</p>

                                    </div>

                                </div>

                            </SwiperSlide>  

                        );

                    })}

                    {/** Blog Navigation Section */}
                    <div className={HomeStyle.homeBlogNavigationSection}>

                        {/** Blog Navigation Inner Section */}
                        <div className={HomeStyle.blogNavigationInnerSection}>

                            <span id='prev'>Previous</span>
                            <span id='next'>Next</span>

                        </div>

                    </div>

                </Swiper>

            </div>

        </>

    );

}

export default Secondblogparentcontainer;