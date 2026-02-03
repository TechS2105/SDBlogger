import React from 'react';

function Browsebytopicboxinnercontentsection({HomeStyle, isActiveIdx, idx, blogItem, defaultArrow, hoverableArrow, linkText}){

    return(

        <>
        
            {/** Topic Box Inner Content Section */}
            <div 
                                                
                className={HomeStyle.topicBoxContentDiv} 
                style={{
                                                        
                    height: isActiveIdx === idx ? '100%' : '50%',
                    transition: "all 0.5s ease"
            
                }}
                                                    
            >
            
                <h3> {blogItem.blogCategory} </h3>
                <p> {blogItem.frontView[0].blogFrontViewMainTitle.length > 20 ? blogItem.frontView[0].blogFrontViewMainTitle.slice(0, 58) : blogItem.frontView[0].blogFrontViewMainTitle} </p>
                <a href="#">{linkText} {defaultArrow} {hoverableArrow}</a>
            
            </div>

        </>

    );

}

export default Browsebytopicboxinnercontentsection;