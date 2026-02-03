import React from 'react';
import BrowseByTopicBox from './Browsebytopicbox';

function Browsebytopicinertopicboxsection({HomeStyle, blogs, handleHoverAnime, handleUnhoverAnime, isActiveIdx, defaultArrow, hoverableArrow,}){

    return(

        <>
        
            {/** Topic Box Section */}
            <div className={HomeStyle.browseByTopicInnerTopicBoxSection}>
            
                {/** Topic Box */}
                {blogs.slice(0, 8).map((blogItem, idx) => {
            
                    return(
            
                        <BrowseByTopicBox
                        
                            HomeStyle={HomeStyle}
                            blogItem={blogItem}
                            idx={idx}
                            handleHoverAnime={() => handleHoverAnime(idx)}
                            handleUnhoverAnime={handleUnhoverAnime}
                            defaultArrow={defaultArrow}
                            hoverableArrow={hoverableArrow}
                            isActiveIdx={isActiveIdx}

                        />
            
                    );
            
                })}
                                 
            
            </div>

        </>

    );

}

export default Browsebytopicinertopicboxsection;