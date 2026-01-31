import React from 'react';

function Secondblogswiperslidecategorysection({HomeStyle, blogItems}){

    return(

        <>
        
            {/** Swiper Slide Category Section */}
            <div className={HomeStyle.secondBlogSwiperSlideCategoryBox}>

                <span> {blogItems.blogCategory} </span>

            </div>

        </>

    );

}

export default Secondblogswiperslidecategorysection;