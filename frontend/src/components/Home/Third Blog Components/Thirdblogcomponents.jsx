import React, {useEffect} from 'react';
import { SlCalender } from "react-icons/sl";
import { LuCircleUserRound } from "react-icons/lu";
import { RiArrowRightSLine } from "react-icons/ri";
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllBlogContents} from '../../../features/Blog Contents/BlogContentSlice';
import { LuLoader } from "react-icons/lu";
import { PiMaskSad } from "react-icons/pi";

function Thirdblogcomponents({HomeStyle}){

    const {items: blogs, status} = useSelector((state) => state.blogContent);
    const reandomBlog = [...blogs].sort(() => (Math.random() - 0.5));
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
                <div className={HomeStyle.thirdBlogInnerContainer}>

                    {/** Title Div */}
                    <div className={HomeStyle.thirdBlogTitleSection}>

                        <h2> Today's Highlight </h2>

                    </div>

                    {/** Blog Div */}
                    <div className={HomeStyle.thirdBlogMainDiv}>

                        {reandomBlog && reandomBlog.length > 0 ? 
                        
                            reandomBlog.slice(0, 4).map((blogItem, index) => {

                                // Configure Custom Grid Style
                                const configureStyle = [

                                    {

                                        id: HomeStyle.blogGrid1,
                                        blogGridImageStyle: HomeStyle.firstBlogGridImageBox, 
                                        blogGridContentStyle: HomeStyle.firstBlogContentBox,
                                        blogGridInnerContentStyle: HomeStyle.firstBlogInnerContentBox

                                    },

                                    {

                                        id: HomeStyle.blogGrid2,
                                        blogGridImageStyle: HomeStyle.secondBlogGridImageBox,
                                        blogGridContentStyle: HomeStyle.secondBlogGridContentBox,
                                        blogGridInnerContentStyle: HomeStyle.secondBlogGridInnerContentBox

                                    },

                                    {

                                        id: HomeStyle.blogGrid3,
                                        blogGridImageStyle: HomeStyle.thirdBlogGridImageBox,
                                        blogGridContentStyle: HomeStyle.thirdBlogGridContentBox,
                                        blogGridInnerContentStyle: HomeStyle.thirdBlogInnerContentBox

                                    },
    
                                    {

                                        id: HomeStyle.blogGrid4,
                                        blogGridImageStyle: HomeStyle.fourthBlogGridImageBox,
                                        blogGridContentStyle: HomeStyle.fourthBlogGridContentBox,
                                        blogGridInnerContentStyle: HomeStyle.fourthBlogGridInnerContentBox

                                    }

                                ];

                                const style = configureStyle[index];

                            return(

                                <div className={HomeStyle.blogGrid} id={style.id} key={blogItem.id}>

                                    {/** Image Box */}
                                    <div className={style.blogGridImageStyle}>

                                        <img src={blogItem.blogImage} alt={blogItem.blogImageAltText} />

                                    </div>

                                    {/** Content Box */}
                                    <div className={style.blogGridContentStyle}>

                                        {/** Inner Content Box */}
                                        <div className={style.blogGridInnerContentStyle}>

                                            <p>

                                                <SlCalender/><span>{blogItem.blogDate}</span>
                                                <LuCircleUserRound/><span>{blogItem.authorName}</span>

                                            </p>

                                            {index === 0 ? (

                                                <h3>{blogItem.innerView[0].blogInnerViewMainTitle.length ? blogItem.innerView[0].blogInnerViewMainTitle.slice(0, 100) : blogItem.innerView[0].blogInnerViewMainTitle}</h3>

                                            ) : (

                                                <h3>{blogItem.innerView[0].blogInnerViewMainTitle.length ? blogItem.innerView[0].blogInnerViewMainTitle.slice(0,43) : blogItem.innerView[0].blogInnerViewMainTitle}...</h3>

                                            )}

                                            {index === 0 ? (

                                                <p>{blogItem.innerView[0].blogInnerViewIntroDes[0].innerIntroFirstPara.length > 20 ? blogItem.innerView[0].blogInnerViewIntroDes[0].innerIntroFirstPara.slice(0, 200) : blogItem.innerView[0].blogInnerViewIntroDes[0].innerIntroFirstPara}...</p>

                                            ) : (

                                                <p>{blogItem.innerView[0].blogInnerViewIntroDes[0].innerIntroFirstPara.length > 20 ? blogItem.innerView[0].blogInnerViewIntroDes[0].innerIntroFirstPara.slice(0, 80) : blogItem.innerView[0].blogInnerViewIntroDes[0].innerIntroFirstPara}...</p>

                                            )}

                                            {index === 0 && 
                                            
                                                <a href="#">Read More <RiArrowRightSLine/></a>

                                            }

                                        </div>

                                    </div>

                                </div>

                            )}) : null }      

                    </div>

                </div>

            </div>

        </>

    );

}

export default Thirdblogcomponents;