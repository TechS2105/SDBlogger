import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation} from 'swiper/modules';
import SecondBlogSwiperSlideNavigationArrowBox from './Secondblogswiperslidenavigationarrowbox';
import SecondBlogSwiperSlideResponsiveNavigationArrowBox from './Secondblogswiperslideresponsivenavigationarrowbox';
import SecondBlogSwiperSlideCategorySection from './Secondblogswiperslidecategorysection';
import SecondBlogSwiperSlideImageSection from './Secondblogswiperslideimagesection';
import SecondBlogSwiperSlideContentSection from './Secondblogswiperslidecontentsection';

function Secondblogswiper({blogs, HomeStyle, handleSwiperSlideAnimeOnMouseOut, handleSwiperSlideAnimeOnMouseOver, configureParaStyle, configureSpanStyle, configureTitleStyle, swiperLeftArrow, swiperRightArrow}){

    return(

        <>
        
            {/** Swiper Section */}
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
                            <SecondBlogSwiperSlideCategorySection 
                            
                                HomeStyle={HomeStyle}
                                blogItems={blogItems}

                            />

                            {/** Image Box */}
                            <SecondBlogSwiperSlideImageSection 
                            
                                HomeStyle={HomeStyle}
                                blogItems={blogItems}

                            />

                            {/** Content Box */}
                            <SecondBlogSwiperSlideContentSection 
                            
                                HomeStyle={HomeStyle}
                                blogItems={blogItems}
                                configureParaStyle={configureParaStyle}
                                configureSpanStyle={configureSpanStyle}
                                configureTitleStyle={configureTitleStyle}

                            />

                        </SwiperSlide>

                    );

                })}
                        
                {/** Second Blog Swiper Slide Navigation Arrow Box */}
                <SecondBlogSwiperSlideNavigationArrowBox 
                
                    HomeStyle={HomeStyle}
                    prev="prev"
                    next="next"

                />

                {/** Second Blog Swiper Slide Mobile View Navigation Arrow Box */}
                <SecondBlogSwiperSlideResponsiveNavigationArrowBox 
                
                    HomeStyle={HomeStyle}
                    prev="prev"
                    next="next"
                    swiperLeftArrow={swiperLeftArrow}
                    swiperRightArrow={swiperRightArrow}

                />

            </Swiper>

        </>

    );

}

export default Secondblogswiper;