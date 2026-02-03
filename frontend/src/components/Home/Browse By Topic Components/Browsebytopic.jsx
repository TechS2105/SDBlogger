import React, {useState, useEffect} from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
import {useSelector, useDispatch} from 'react-redux';
import {fetchAllBlogContents} from '../../../features/Blog Contents/BlogContentSlice';
import { LuLoader } from "react-icons/lu";
import { PiMaskSad } from "react-icons/pi";

function Browsebytopic({HomeStyle}){

    const [isActiveIdx, setActiveIdx] = useState(null);

    /** Mouse Over & Mouse Out Anime */
    const handleHoverAnime = (idx) => {

        setActiveIdx(idx);

    }

    const handleUnhoverAnime = () => {

        setActiveIdx(null);

    }

    /** Fetch All Blog Contents */
    const {items: blogs, status} = useSelector((state) => state.blogContent);
    const dispatch = useDispatch();

    useEffect(() => {

        if(status === 'idle'){

            dispatch(fetchAllBlogContents());

        }

    }, [status, dispatch]);

    if(status === 'loading'){

        return(

            <div className="loadingSection">

                <LuLoader />

            </div>

        );

    }

    if(status === 'reject'){

        <div className='failedMessageSection'>

            <PiMaskSad />
            <p>Something went wrong...</p>

        </div>

    }

    return(

        <>
        
            {/** Browse By Topic Main Container */}
            <div className={HomeStyle.browseByTopicParentContainer}>

                {/** Browse By Topic Inner Container */}
                <div className={HomeStyle.browseByTopicInnerContainer}>

                   {/** Title Section */}
                   <div className={HomeStyle.browseByTopicTitleContainer}>

                        <h2> Category </h2>

                   </div>

                   {/** Topic Section */}
                   <div className={HomeStyle.browseByTopicInnerTopicBoxSection}>

                        {/** Topic Box */}
                        {blogs.slice(0, 8).map((blogItem, idx) => {

                            return(

                                <div className={HomeStyle.browseByTopicSectionTopicBox} onMouseOver={() => handleHoverAnime(idx)} onMouseOut={handleUnhoverAnime} key={idx}>

                                    <img 
                                    
                                        src={blogItem.blogImage} 
                                        alt={blogItem.blogImageAltText} 
                                        style={{

                                            opacity: isActiveIdx === idx ? '1' : '0',
                                            transition: 'all 0.5s ease'

                                        }}
                                        
                                    />

                                    {/** Topic Image Box */}
                                    <div 
                                        
                                        className={HomeStyle.topicBoxImageDiv} 
                                        style={{
                                            
                                            height: isActiveIdx === idx ? '0%' : '50%',
                                            transition: 'all 0.5s ease'

                                        }}
                                        
                                    >

                                        <img 
                                        
                                            src={blogItem.blogImage} 
                                            alt={blogItem.blogImageAltText} 
                                            style={{
                                                
                                                transform: isActiveIdx === idx ? 'translateY(-200px)' : 'translateY(0px)',
                                                transition: 'all 0.5s ease'

                                            }}
                                            
                                        />

                                    </div>

                                    {/** Topic Content Box */}
                                    <div 
                                    
                                        className={HomeStyle.topicBoxContentDiv} 
                                        style={{
                                            
                                            height: isActiveIdx === idx ? '100%' : '50%',
                                            transition: "all 0.5s ease"

                                        }}
                                        
                                    >

                                        <h3> {blogItem.blogCategory} </h3>
                                        <p> {blogItem.frontView[0].blogFrontViewMainTitle} </p>
                                        <a href="#">Explore Category <MdArrowForwardIos /> <IoArrowForwardOutline /></a>

                                    </div>

                                </div>

                            );

                        })}
                     

                   </div>

                </div>

            </div>

        </>

    );

}

export default Browsebytopic;