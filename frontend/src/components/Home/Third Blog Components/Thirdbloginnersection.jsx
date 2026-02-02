import React from 'react';
import ThirdBlogMainTitle from '../Third Blog Components/Thirdblogtitlesection';
import ThirdBlogInnerMainBlog from '../Third Blog Components/Thirdbloginnermainblogsection';

function Thirdbloginnersection({HomeStyle, randomBlog, calenderSVG, authorSVG, readMoreArrow}){

    return(

        <>
        
            {/** Third Blog Inner Section */}
            <div className={HomeStyle.thirdBlogInnerContainer}>
            
                {/** Title Div */}
                <ThirdBlogMainTitle 
                
                    HomeStyle={HomeStyle}
                    thirdBlogMainTitle="Today's Highlight"

                />
            
                {/** Blog Div */}
                <ThirdBlogInnerMainBlog 
                
                    HomeStyle={HomeStyle}
                    randomBlog={randomBlog}
                    calenderSVG={calenderSVG}
                    authorSVG={authorSVG}
                    readMoreArrow={readMoreArrow}

                />
                                
            
            </div>

        </>

    );

}

export default Thirdbloginnersection;