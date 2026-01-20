import React, {useEffect} from 'react';
import HomeStyle from '../../../public/styles/home style folder/Home.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllBlogContents} from '../../features/Blog Contents/BlogContentSlice';
import { LuLoader } from "react-icons/lu";
import { PiMaskSadLight } from "react-icons/pi";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';

function Home(){

    const {items: blog, status} = useSelector((state) => state.blogContent); // initalize blog slice 
    const dispatch = useDispatch(); // initialize a dispatch function

    const randomBlog = [...blog].sort(() => Math.random() - 0.5);

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchAllBlogContents());

        }

    }, [status, dispatch]);

    if(status === 'loading') {

        return(

            <div className="loadingSection">

                <LuLoader />
                <p> Blogs ara loading...</p>

            </div>

        );

    }

    if(status === 'failed'){

        return(

            <div className="failedMessageSection">

                <PiMaskSadLight />
                <p>Something went wrong...</p>

            </div>

        );

    }

    return(

        <>
        
            <main>

                {/** Home Page */}

                {/** First Blog Main Section */}
                <div className={HomeStyle.firstBlogMainSection}>

                    {/** First Blog Swiper Inner Section */}
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
                                    <div className={HomeStyle.innerSwiperSlideBlogBox}>

                                        {/** Image Box */}
                                        <div className={HomeStyle.FirstBlogInnerSectionImageBox}>

                                            <img src={blogItem.blogImage} alt={blogItem.blogImageAltText} />

                                        </div>

                                        {/** Content Box  */}
                                        <div className={HomeStyle.FirstBlogInnerSectionContentBox}>

                                            <p><span>{blogItem.blogDate}</span> / <span>{blogItem.authorName}</span></p>
                                            <h4>{blogItem.frontView[0].blogFrontViewMainTitle.length > 20 ? blogItem.frontView[0].blogFrontViewMainTitle.slice(0, 55) : blogItem.frontView[0].blogFrontViewMainTitle}</h4>

                                        </div>

                                    </div>

                                </SwiperSlide> 

                            );

                        })}

                    </Swiper>

                </div>

            </main>

        </>

    );

}

export default Home;