import React, {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation} from 'swiper/modules';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllBlogContents} from '../../../features/Blog Contents/BlogContentSlice';
import { LuLoader } from "react-icons/lu";
import { PiMaskSad } from "react-icons/pi";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { LiaArrowRightSolid } from "react-icons/lia";

function Secondblogparentcontainer({HomeStyle}){

    /** Animate Texts onMouseOver and Out Event */

    // Configure Para Style
    const[configureParaStyle, setConfigureParaStyle] = useState();

    // Configure Title Style
    const[configureTitleStyle, setConfigureTitleStyle] = useState({

        transform: 'translateY(40px)',
        margingBottom: '0px',
        // width: '850px'

    });

    // Configure Span Style
    const [configureSpanStyle, setConfigureSpanStyle] = useState({

        transform: 'translateY(40px)'

    });

    const spanTransition = "transform 0.8s ease, opacity 1.5s ease 0.6s, filter 1.5s ease 0.6s"; // Span Transition Styl
    const titleTransition = "transform 0.8s ease, width 0.8s ease, margin-bottom 0.8s ease, filter 1.5s ease 1.5s, opacity 1.5s ease 1.5s"; // Title Transition Style
    const paraTransition = "transform 0.8s ease, opacity 1.5s ease 1.8s, filter 1.5s ease 1.8s"; // Para Transition Style

    // Mouse Over Fuction
    function handleSwiperSlideAnimeOnMouseOver(){

        if(window.innerWidth > 800){

            // Span Style
            setConfigureSpanStyle({

                transform: 'translateY(0px)',
                transition: spanTransition

            });

            // Para Style
            setConfigureParaStyle({

                transform: 'translateY(0px)',
                transition: paraTransition

            });

            // Title Style
            setConfigureTitleStyle({

                transform: 'translateY(0px)',
                width: '1000px',
                marginBottom: "20px",
                transition: titleTransition

            });

        }

    }

    // Mouse Out Function 
    function handleSwiperSlideAnimeOnMouseOut(){

        if(window.innerWidth > 800){

            // Span Style
            setConfigureSpanStyle({

                transform: 'translateY(40px)',
                transition: spanTransition

            });

            // Para Style
            setConfigureParaStyle({

                transform: 'translateY(100px)',
                transition: paraTransition

            });

            // Title Style
            setConfigureTitleStyle({

                transform: 'translateY(40px)',
                marginBottom: "0px",
                width: '850px',
                transition: titleTransition

            });

        }

    }


    /** All Blogs */
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

            <div className='failedMessageSection'>
            
                <PiMaskSad />
                <p> Something went woring...</p>

            </div>

        );

    }

    return(

        <>
        
            {/** Second Blog Section */}
            <div className={HomeStyle.secondBlogParentSection}>

                {/** Second Blog Inner Section */}
                <div className={HomeStyle.secondBlogInnerSection}>

                    {/** Second Blog Swiper Container */}
                    <Swiper 

                        slidesPerView={1}
                        loop={true}
                        speed={1500}
                        navigation={{

                            nextEl: '#next',
                            prevEl: '#prev'

                        }}

                        modules = {[Navigation]}
                        className={HomeStyle.secondBlogSwiperContainer}
                        
                    >

                        {/** Second Blog Swiper Slide Container */}
                        {blogs.map((blogItems) => {

                            return(

                                <SwiperSlide className={HomeStyle.secondBlogSwiperSlideContainer} key={blogItems.id} onMouseOver={handleSwiperSlideAnimeOnMouseOver} onMouseOut={handleSwiperSlideAnimeOnMouseOut}>

                                    {/** Category Box */}
                                    <div className={HomeStyle.secondBlogSwiperSlideCategoryBox}>

                                        <span> {blogItems.blogCategory} </span>

                                    </div>

                                    {/** Image Box */}
                                    <div className={HomeStyle.secondBlogSwiperSlideImagebox}>

                                        {/** Image Overlay */}
                                        <div className={HomeStyle.secondBlogSwiperSlideImageOverlay}></div>
                                        <img src={blogItems.blogImage} alt={blogItems.blogImageAltText} />

                                    </div>

                                    {/** Content Box */}
                                    <div className={HomeStyle.secondBlogSwiperSlideContentBox}>

                                        {/** Inner Content Box  */}
                                        <div className={HomeStyle.secondBlogSwiperSlideInnerContentBox}>

                                            <span style={configureSpanStyle}>{blogItems.blogDate} / {blogItems.authorName}</span>
                                            <h2 style={configureTitleStyle}>{blogItems.frontView[0].blogFrontViewMainTitle}</h2>
                                            <p style={configureParaStyle}>{blogItems.frontView[0].blogFrontViewShortDes.length > 20 ? blogItems.frontView[0].blogFrontViewShortDes.slice(0, 150) : blogItems.frontView[0].blogFrontViewShortDes}...</p>

                                        </div>

                                    </div>

                                </SwiperSlide>

                            );

                        })}
                        
                        {/** Second Blog Swiper Slide Navigation Arrow Box */}
                        <div className={HomeStyle.secondBlogSwiperSlideNavigationArrowBox}>

                            {/** Inner Navigation Arrow Box */}
                            <div className={HomeStyle.secondBlogSwiperSlideInnerNavigationArrowBox}>

                                <span id='prev'>Previous</span>
                                <span id='next'>Next</span>

                            </div>

                        </div>

                        {/** Second Blog Swiper Slide Mobile View Navigation Arrow Box */}
                        <div className={HomeStyle.secondBlogSwiperSlideMobileViewNavigationArrowBox}>

                            {/** Second Blog Swiper Slide Mobile View Inner Navigation Arrow Box */}
                            <div className={HomeStyle.secondBlogSwiperSlideMobileViewInnerNavigationArrowBox}>

                                <span id='prev'><LiaArrowLeftSolid /></span>
                                <span id='next'><LiaArrowRightSolid /></span>
                                
                            </div>

                        </div>

                    </Swiper>

                </div>

            </div>

        </>

    );

}

export default Secondblogparentcontainer;