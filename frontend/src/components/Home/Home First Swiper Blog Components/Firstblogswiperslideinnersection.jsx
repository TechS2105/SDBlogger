import React from 'react';
import FirstSwiperBlogImageSection from '../Home First Swiper Blog Components/Firstswiperblogimagebox';
import FirstSwiperBlogContentSection from '../Home First Swiper Blog Components/Firstswiperblogcontentbox';

function Firstblogswiperslideinnersection({HomeStyle, blogItem}){

    return(

        <>
        
            {/** Swiper Slide Inner Section */}
            <div className={HomeStyle.innerSwiperSlideBlogBox}>
            
                {/** Image Box */}
                <FirstSwiperBlogImageSection
                
                    HomeStyle={HomeStyle}
                    blogItem={blogItem}

                />
            
                {/** Content Box  */}
                <FirstSwiperBlogContentSection
                
                    HomeStyle={HomeStyle}
                    blogItem={blogItem}

                />
            
            </div>

        </>

    );

}

export default Firstblogswiperslideinnersection;