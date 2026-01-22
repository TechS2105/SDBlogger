import React, {useState, useEffect} from 'react'; 
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation} from 'swiper/modules';
import {fetchAllBlogContents} from '../../../features/Blog Contents/BlogContentSlice'
import {useSelector, useDispatch} from 'react-redux';
import { LuLoader } from "react-icons/lu";
import { PiMaskSadLight } from "react-icons/pi";

function Secondblogparentcontainer({HomeStyle}){

    const [activeIndex, setActiveIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Style Configurations
    const activeTitleStyle = {
        marginBottom: "20px",
        transition: "all 0.8s ease"
    };

    const inactiveTitleStyle = {
        marginBottom: "-150px",
        transition: "all 0.8s ease",
    };

    const activeParaStyle = {
        transform: "translateY(0px)",
        transition: 'all 1s ease',
        opacity: "1",
        filter: "blur(0px)"
    };

    const inactiveParaStyle = {
        transform: "translateY(300px)",
        transition: 'all 1s ease',
        filter: "blur(20px)",
        opacity: "0"
    };


    const {items: blog, status} = useSelector((state) => state.blogContent);
    const dispatch = useDispatch();

    /** Mouse Over */
    function handleMouseOver(index){
        if(window.innerWidth > 615){
            setHoveredIndex(index);
        }
    }

    /** Mouse Out */
    function handleMouseOut(){
        if(window.innerWidth > 615){
            setHoveredIndex(null);
        }
    }

    /** Handle Click Function For Mobile Devices */
    function handleClick(index){
        if(window.innerWidth < 615){
            // Toggle active index
            setActiveIndex(prevIndex => (prevIndex === index ? null : index));
        }
    }

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

                <PiMaskSadLight />
                <p> Something went wrong...</p>

            </div>
            
        );

    }

    return(

        <>
        
            {/** Second Blog Parent Container */}
            <div className={HomeStyle.secondBlogParentSection}>

                {/** Inner Section */}
                <div className={HomeStyle.secondBlogInnerSection}>

                    {/** Swiper Container */}
                    <Swiper 
                    
                        loop={true}
                        slidesPerView={1}
                        speed={1000}

                        navigation={{

                            nextEl: '#next',
                            prevEl: '#prev',

                        }}

                        modules={[Navigation]}
                        className={HomeStyle.secondBlogSwiperContainer}
                        
                    >

                        {/** Swiper Slide Container */}
                        {blog.map((blogItem, idx) => {

                            return(

                                <SwiperSlide 
                                    className={HomeStyle.secondBlogSwiperSlideContainer} 
                                    onMouseOver={() => handleMouseOver(idx)} 
                                    onMouseOut={handleMouseOut} 
                                    onClick={() => handleClick(idx)} 
                                    key={idx}
                                >

                                    {/** Category Box */}
                                    <div className={HomeStyle.secondBlogCategoryBox}>

                                        <span> {blogItem.blogCategory} </span>

                                    </div>

                                    {/** Image Box */}
                                    <div className={HomeStyle.secondBlogImageBox}>

                                        {/** Image Overlay */}
                                        <div className={HomeStyle.secondBlogImageOverlay}></div>
                                        <img src={blogItem.blogImage} alt={blogItem.blogImageAltText} />

                                    </div>

                                    {/** Blog Details Box */}
                                    <div className={HomeStyle.secondBlogDetailsBox}>

                                        <i><span>{blogItem.blogDate}</span> / <span>{blogItem.authorName}</span></i>
                                        <h3 style={(hoveredIndex === idx || activeIndex === idx) ? activeTitleStyle : inactiveTitleStyle}> 
                                            {blogItem.frontView[0].blogFrontViewMainTitle} 
                                        </h3>
                                        <p style={(hoveredIndex === idx || activeIndex === idx) ? activeParaStyle : inactiveParaStyle}>
                                            {blogItem.frontView[0].blogFrontViewShortDes.length > 20 ? blogItem.frontView[0].blogFrontViewShortDes.slice(0, 100) : blogItem.frontView[0].blogFrontViewShortDes}...
                                        </p>

                                    </div>

                                </SwiperSlide>

                            );

                        })}
                       

                         {/** Navigation Box */}
                        <div className={HomeStyle.navigationBox}>

                            <span id='prev'>Previous</span>
                            <span id='next'>Next</span>

                        </div>

                        {/** Mobile Responsive Navigation Section */}
                        <div className={HomeStyle.mobileResponsiveNavigationSection}>


                        </div>

                    </Swiper>

                </div>

            </div>

        </>

    );

}

export default Secondblogparentcontainer;