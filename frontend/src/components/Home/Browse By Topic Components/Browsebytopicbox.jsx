import React from 'react';
import BrowseByTopicBackgroundImage from './Browsebytopicbackgroundimage';
import BrowseByTopicInnerImageSection from './Browsebytopicboxinnerimagesection';
import BrowseByTopicInnerContentSection from './Browsebytopicboxinnercontentsection';

function Browsebytopicbox({HomeStyle, isActiveIdx, handleHoverAnime, handleUnhoverAnime, blogItem, idx, hoverableArrow, defaultArrow, }){

    return(

        <>
        
            {/** Topic Box */}
            <div className={HomeStyle.browseByTopicSectionTopicBox} onMouseOver={handleHoverAnime} onMouseOut={handleUnhoverAnime} key={idx}>
            
                <BrowseByTopicBackgroundImage
                
                    blogItem={blogItem}
                    isActiveIdx={isActiveIdx}
                    idx={idx}

                />
            
                {/** Topic Image Box */}
                <BrowseByTopicInnerImageSection
                
                    blogItem={blogItem}
                    idx={idx}
                    isActiveIdx={isActiveIdx}
                    HomeStyle={HomeStyle}

                />
            
                {/** Topic Content Box */}
                <BrowseByTopicInnerContentSection
                
                    blogItem={blogItem}
                    idx={idx}
                    isActiveIdx={isActiveIdx}
                    HomeStyle={HomeStyle}
                    defaultArrow={defaultArrow}
                    hoverableArrow={hoverableArrow}
                    linkText="Explore Category"

                />
            
            </div>
        
        </>

    );

}

export default Browsebytopicbox;