import React, {useEffect} from 'react';
import FirstBlogSwiperSection from '../Home First Swiper Blog Components/Firstblogswipersection';
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllBlogContents} from '../../../features/Blog Contents/BlogContentSlice';
import { LuLoader } from "react-icons/lu";
import { PiMaskSadLight } from "react-icons/pi";

function Firstblogparentsection({HomeStyle}){

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
        
            {/** First Blog Main Section */}
            <div className={HomeStyle.firstBlogMainSection}>

                    {/** First Blog Swiper Inner Section */}
                    <FirstBlogSwiperSection 
                    
                        HomeStyle={HomeStyle}
                        randomBlog={randomBlog}

                    />

            </div>

        </>

    );

}

export default Firstblogparentsection;