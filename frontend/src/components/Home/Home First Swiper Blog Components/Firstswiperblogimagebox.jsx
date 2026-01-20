import React from 'react';

function Firstswiperblogimagebox({blogItem, HomeStyle}){

    return(

        <>
        
            {/** Image Section  */}
            <div className={HomeStyle.FirstBlogInnerSectionImageBox}>
            
                <img src={blogItem.blogImage} alt={blogItem.blogImageAltText} />
            
            </div>

        </>

    );

}

export default Firstswiperblogimagebox;