import React, {useState, useEffect} from 'react';
import SecondBlogSwiper from './Secondblogswiper';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllBlogContents} from '../../../features/Blog Contents/BlogContentSlice';

function Secondblogswipercontainer({HomeStyle, blogLoaderIcon, blogErrorIcon, swiperLeftArrow, swiperRightArrow, blogErrorMessage}){

/** Animate Texts onMouseOver and Out Event */

    // Configure Para Style
    const[configureParaStyle, setConfigureParaStyle] = useState();

    // Configure Title Style
    const[configureTitleStyle, setConfigureTitleStyle] = useState({

        transform: 'translateY(60px)',
        margingBottom: '0px',

    });

    // Configure Span Style
    const [configureSpanStyle, setConfigureSpanStyle] = useState({

        transform: 'translateY(60px)'

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

                transform: 'translateY(60px)',
                transition: spanTransition

            });

            // Para Style
            setConfigureParaStyle({

                transform: 'translateY(100px)',
                transition: paraTransition

            });

            // Title Style
            setConfigureTitleStyle({

                transform: 'translateY(60px)',
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

                {blogLoaderIcon}

            </div>

        );

    }

    if(status === 'failed'){

        return(

            <div className='failedMessageSection'>
            
                {blogErrorIcon}
                <p>{blogErrorMessage}</p>

            </div>

        );

    }

    return(

        <>
        
            {/** Blog Swiper Container */}
            <div className={HomeStyle.secondBlogInnerSection}>

                {/** Second Blog Swiper Container */}
                <SecondBlogSwiper 
                
                    blogs={blogs}
                    HomeStyle={HomeStyle}
                    configureParaStyle={configureParaStyle}
                    configureSpanStyle={configureSpanStyle}
                    configureTitleStyle={configureTitleStyle}
                    handleSwiperSlideAnimeOnMouseOut={handleSwiperSlideAnimeOnMouseOut}
                    handleSwiperSlideAnimeOnMouseOver={handleSwiperSlideAnimeOnMouseOver}
                    swiperLeftArrow={swiperLeftArrow}
                    swiperRightArrow={swiperRightArrow}

                />    

            </div>

        </>

    );

}

export default Secondblogswipercontainer;