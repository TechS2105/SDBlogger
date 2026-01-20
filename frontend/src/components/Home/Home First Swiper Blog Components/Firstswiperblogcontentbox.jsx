import React from 'react';

function Firstswiperblogcontentbox({HomeStyle, blogItem}){

    return(

        <>
        
            {/** Content Box */}
            <div className={HomeStyle.FirstBlogInnerSectionContentBox}>
            
                <p><span>{blogItem.blogDate}</span> / <span>{blogItem.authorName}</span></p>
                <h4>{blogItem.frontView[0].blogFrontViewMainTitle.length > 20 ? blogItem.frontView[0].blogFrontViewMainTitle.slice(0, 55) : blogItem.frontView[0].blogFrontViewMainTitle}</h4>
            
            </div>

        </>

    );

}

export default Firstswiperblogcontentbox;