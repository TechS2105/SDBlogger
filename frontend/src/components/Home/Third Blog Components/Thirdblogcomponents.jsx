import React, {useEffect} from 'react';
import { SlCalender } from "react-icons/sl";
import { LuCircleUserRound } from "react-icons/lu";
import { RiArrowRightSLine } from "react-icons/ri";
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllBlogContents} from '../../../features/Blog Contents/BlogContentSlice';

function Thirdblogcomponents({HomeStyle}){

    const {items: blogs, status} = useSelector((state) => state.blogContent);
    const dispatch = useDispatch();

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchAllBlogContents());

        }

    }, [status, dispatch]);

    return(

        <>
        
            {/** Third Blog Parent Container */}
            <div className={HomeStyle.thirdBlogParentContainer}>

                {/** Third Blog Inner Container */}
                <div className={HomeStyle.thirdBlogInnerContainer}>

                    {/** Title Div */}
                    <div className={HomeStyle.thirdBlogTitleSection}>

                        <h2> Today's Highlight </h2>

                    </div>

                    {/** Blog Div */}
                    <div className={HomeStyle.thirdBlogMainDiv}>

                        {/** First Blog Container */}
                        <div className={HomeStyle.blogGrid} id={HomeStyle.blogGrid1}>

                                    {/** Image Div */}
                                    <div className={HomeStyle.firstBlogGridImageBox}>

                                        <img src="../../../public/images/Automotive/automotive_blog_image1.jpeg" alt="" />

                                    </div>

                                    {/** Content Div */}
                                    <div className={HomeStyle.firstBlogContentBox}>

                                        {/** Inner Content Box */}
                                        <div className={HomeStyle.firstBlogInnerContentBox}>

                                            <p>
                                                
                                                <SlCalender /><span>Jan 30, 2026</span>
                                                <LuCircleUserRound /><span>Monalisha Sarkar</span>
                                                
                                            </p>

                                            <h3>How Modern Businesses Turn Digital Strategy Into Profit</h3>
                                            <p>In the last decade, companies pursued technology to stay modern. Today, the focus has shifted to profit. Businesses want to know how each digital investment impacts revenue, margins, customer retention, and scalability.</p>

                                            <a href="#"> Read More <RiArrowRightSLine /></a>

                                        </div>

                                    </div>

                        </div>

                        {/** Second Blog Container */}
                        <div className={HomeStyle.blogGrid} id={HomeStyle.blogGrid2}>

                                    {/** Image Div */}
                                    <div className={HomeStyle.secondBlogGridImageBox}>

                                        <img src="../../../public/images/Science/science_blog_image1.jpeg" alt="" />

                                    </div>

                                    {/** Content Div */}
                                    <div className={HomeStyle.secondBlogGridContentBox}>

                                        {/** Content Inner Box */}
                                        <div className={HomeStyle.secondBlogGridInnerContentBox}>

                                            <p>

                                                <SlCalender/><span>Jan 30, 2026</span>
                                                <LuCircleUserRound/><span> Rohini Sarkar </span>


                                            </p>

                                            <h3>How AI Is Quietly Reshaping Core Business Operations</h3>
                                            <p>AI is moving beyond experimentation and entering the operational backbone of companies. It is reshaping how...</p>

                                        </div>

                                    </div>

                        </div>

                        {/** Third Blog Container */}
                        <div className={HomeStyle.blogGrid} id={HomeStyle.blogGrid3}>

                                    {/** Image Box  */}
                                    <div className={HomeStyle.thirdBlogGridImageBox}>

                                        <img src="../../../public/images/Lifestyle/lifestyle_blog_image1.jpeg" alt="" />

                                    </div>

                                    {/** Blog Content Box */}
                                    <div className={HomeStyle.thirdBlogGridContentBox}>

                                        {/** Blog Inner Content Box */}
                                        <div className={HomeStyle.thirdBlogInnerContentBox}>

                                            <p>

                                                <SlCalender/><span>Jan 31, 2026</span>
                                                <LuCircleUserRound/><span>Rahul Sarkar</span>


                                            </p>

                                            <h3>The Future of Electric Mobility and How</h3>
                                            <p>Electric mobility is entering a new phase of mainstream adoption. Its impact will redefine how people commute, how...</p>

                                        </div>

                                    </div>

                        </div>

                        {/** Foruth Blog Container */}
                        <div className={HomeStyle.blogGrid} id={HomeStyle.blogGrid4}>

                                    {/** Image Box */}
                                    <div className={HomeStyle.fourthBlogGridImageBox}>

                                        <img src="../../../public/images/Travel/travel_blog_image1.jpeg" alt="" />

                                    </div>

                                    {/** Blog Content Box */}
                                    <div className={HomeStyle.fourthBlogGridContentBox}>

                                        {/** Blog Inner Content Box */}
                                        <div className={HomeStyle.fourthBlogGridInnerContentBox}>

                                            <p>

                                                <SlCalender/><span>Jan 31, 2026</span>
                                                <LuCircleUserRound/><span>Monika Agarwal</span>

                                            </p>

                                            <h3>The Next Frontier in Renewable Energy: What</h3>
                                            <p>Solar and wind reshaped the global energy map, but the future of renewable power depends on new sources that can....</p>

                                        </div>

                                    </div>

                        </div>            

                    </div>

                </div>

            </div>

        </>

    );

}

export default Thirdblogcomponents;