import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import { PiMaskSad } from "react-icons/pi";
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllBlogContents} from '../../../features/Blog Contents/BlogContentSlice';
import { LuLoader } from "react-icons/lu";

function Latestpostmainsectionswipercontainer({HomeStyle}){

    const {items: blogs, status} = useSelector((state) => state.blogContent);
    const dispatch = useDispatch();

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchAllBlogContents());

        }

    }, [status, dispatch]);

    if(status === 'loading'){

        return(

            <div className='loadingSection'>

                <LuLoader />

            </div>

        );

    }

    if(status === 'failed'){

        return(

            <div className="failedMessageSection">

                <PiMaskSad />
                <p>Something went wrong...</p>

            </div>

        );

    }

    return(

        <>
        
            {/** Swiper Container */}
            <Swiper 

                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                speed={1000}
                autoplay={{

                    delay: '2000',
                    pauseOnMouseEnter: true

                }}
                        
                modules={[Autoplay]}
                className={HomeStyle.latestPostSwiperContainer}
                            
            >

                {/** Swiper Slide Container */}
                {blogs.slice(0, 8).map((blogItem) => {

                    return(

                        <SwiperSlide className={HomeStyle.latestPostSwiperSlideContainer}> 

                            {/** Post Category Box */}
                            <div className={HomeStyle.latestPostSwiperSlidePostCategroyBox}>

                                <span> {blogItem.blogCategory} </span>

                            </div>

                            {/** Image Section */}
                            <div className={HomeStyle.latestPostSwiperSlideContainerImageSection}>

                                <img src={blogItem.blogImage} alt={blogItem.blogImageAltText}/>

                            </div>

                            {/** Post Details Box */}
                            <div className={HomeStyle.latestPostSwiperSlideContainerPostDetailSection}>

                                {/** Post Details Inner Box */}
                                <div className={HomeStyle.latestPostSwiperSlideContainerPostDetailsInnerSection}>

                                    <span>{blogItem.blogDate} / Posted By {blogItem.authorName} </span>
                                    <h3>How Modern Businesses Turn Digital Strategy Into Profit</h3>
                                    <p>A detailed look at how companies convert digital strategy into profitable outcomes through data, automation, customer experience, and scalable operating systems.</p>

                                </div>

                            </div>

                        </SwiperSlide>
                                    
                    );

                })}
                            
            </Swiper>

        </>

    );

}

export default Latestpostmainsectionswipercontainer;