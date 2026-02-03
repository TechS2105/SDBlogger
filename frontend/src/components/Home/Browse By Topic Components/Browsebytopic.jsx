import React, {useState, useEffect} from 'react';
import BrowseByTopicTitleSection from './Browsebytopictitlesection';
import BrowseByTopicInnerTopicBoxSection from './Browsebytopicinnertopicboxsection';
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
                   <BrowseByTopicTitleSection
                   
                        HomeStyle={HomeStyle}
                        topicTitle="Category"

                   />

                   {/** Topic Section */}
                   <BrowseByTopicInnerTopicBoxSection
                   
                        HomeStyle={HomeStyle}
                        handleHoverAnime={handleHoverAnime}
                        handleUnhoverAnime={handleUnhoverAnime}
                        isActiveIdx={isActiveIdx}
                        defaultArrow={<MdArrowForwardIos/>}
                        hoverableArrow={<IoArrowForwardOutline/>}
                        blogs={blogs}

                   />

                </div>

            </div>

        </>

    );

}

export default Browsebytopic;