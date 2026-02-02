import React from 'react';
import ThirdBlogInnerMainBlogInnerContentSection from '../Third Blog Components/Thirdbloginnermainbloginnercontentsection';

function Thirdbloginnermainblogcontentsection({style, blogItem, calenderSVG, authorSVG, readMoreArrow, index}){

    return(

        <>
        
            {/** Main Blog Content Section */}
            <div className={style.blogGridContentStyle}>
            
                {/** Inner Content Box */}
                <ThirdBlogInnerMainBlogInnerContentSection
                
                    style={style}
                    blogItem={blogItem}
                    index={index}
                    calenderSVG={calenderSVG}
                    authorSVG={authorSVG}
                    readMoreArrow={readMoreArrow}

                />
            
            </div>

        </>

    );

}

export default Thirdbloginnermainblogcontentsection;