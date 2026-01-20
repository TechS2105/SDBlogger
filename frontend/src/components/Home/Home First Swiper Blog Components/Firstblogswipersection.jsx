import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import FirstBlogSwiperSlideInnerSection from '../Home First Swiper Blog Components/Firstblogswiperslideinnersection';

function Firstblogswipersection({HomeStyle, randomBlog}){

    return(

        <>
        
            {/** Swiper Section */}
            <Swiper 
                                
                slidesPerView={3}
                loop={true}
                spaceBetween={20}
                speed={2000}
                autoplay={{
            
                    delay: '2000',
                    pauseOnMouseEnter: true
            
                }}

                breakpoints={{
            
                    '@0.10':{
            
                        slidesPerView: 1,
                        spaceBetween: 10
            
                    },
            
                    '@1.00':{
            
                        slidesPerView: 2,
                        spaceBetween: 20
            
                    },
            
                    '@1.75':{
            
                        slidesPerView: 3,
                        spaceBetween: 30
            
                    }
                                        
                }}
                
                modules={[Autoplay]}
                className={HomeStyle.swiperFirstBlogInnerSection}
                                    
            >
            
                {/** Swiper Slide Blog Box */}
                {randomBlog.slice(0,3).map((blogItem, idx) => {
            
                    return(
            
                        <SwiperSlide className={HomeStyle.swiperSlideFirstBlogInnerSectionBlogBox} key={idx}>
            
                            {/** Inner Swiper Slide Blog Box */}
                            <FirstBlogSwiperSlideInnerSection
                            
                                HomeStyle={HomeStyle}
                                blogItem={blogItem}

                            />
            
                        </SwiperSlide> 
            
                    );
            
                })}
            
            </Swiper>

        </>

    );

}

export default Firstblogswipersection;