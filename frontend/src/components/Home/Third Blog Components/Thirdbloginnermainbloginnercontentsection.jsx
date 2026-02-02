import React from 'react';

function Thirdbloginnermainbloginnercontentsection({style, calenderSVG, authorSVG, blogItem, readMoreArrow, index}){

    return(

        <>
        
            {/** Main Blog Inner Content Section */}
            <div className={style.blogGridInnerContentStyle}>
            
                <p>
            
                    {calenderSVG}<span>{blogItem.blogDate}</span>
                    {authorSVG}<span>{blogItem.authorName}</span>
            
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
                                                        
                    <a href="#">Read More {readMoreArrow}</a>
            
                }
            
            </div>

        </>

    );

}

export default Thirdbloginnermainbloginnercontentsection;