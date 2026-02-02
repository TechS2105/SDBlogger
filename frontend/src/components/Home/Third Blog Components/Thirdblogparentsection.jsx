import React, {useEffect} from 'react';
import ThirdBlogInnerSection from '../Third Blog Components/Thirdbloginnersection';
import { SlCalender } from "react-icons/sl";
import { LuCircleUserRound } from "react-icons/lu";
import { RiArrowRightSLine } from "react-icons/ri";
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllBlogContents} from '../../../features/Blog Contents/BlogContentSlice';
import { LuLoader } from "react-icons/lu";
import { PiMaskSad } from "react-icons/pi";

function Thirdblogparentsection({HomeStyle}){

    const {items: blogs, status} = useSelector((state) => state.blogContent);
    const randomBlog = [...blogs].sort(() => (Math.random() - 0.5));
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
                <p> Something went wrong...</p>

            </div>

        );

    }

    return(

        <>
        
            {/** Third Blog Parent Container */}
            <div className={HomeStyle.thirdBlogParentContainer}>

                {/** Third Blog Inner Container */}
                <ThirdBlogInnerSection
                
                    HomeStyle={HomeStyle}
                    randomBlog={randomBlog}
                    calenderSVG={<SlCalender/>}
                    authorSVG={<LuCircleUserRound/>}
                    readMoreArrow={<RiArrowRightSLine/>}

                />

            </div>

        </>

    );

}

export default Thirdblogparentsection;