import React from 'react';
import ThirdBlogInnerMainBlogImageSection from '../Third Blog Components/Thirdbloginnermainblogimagesection';
import ThirdBlogInnerMainBlogContentSection from '../Third Blog Components/Thirdbloginnermainblogcontentsection';

function Thirdbloginnermainblogsection({HomeStyle, randomBlog, calenderSVG, readMoreArrow, authorSVG}){

    return(

        <>
        
            {/** Main Blog Section */}
            <div className={HomeStyle.thirdBlogMainDiv}>
            
                {randomBlog && randomBlog.length > 0 ? 
                                    
                    randomBlog.slice(0, 4).map((blogItem, index) => {
            
                    // Configure Custom Grid Style
                    const configureStyle = [
            
                        {
            
                            id: HomeStyle.blogGrid1,
                            blogGridImageStyle: HomeStyle.firstBlogGridImageBox, 
                            blogGridContentStyle: HomeStyle.firstBlogContentBox,
                            blogGridInnerContentStyle: HomeStyle.firstBlogInnerContentBox
            
                        },
            
                        {
            
                            id: HomeStyle.blogGrid2,
                            blogGridImageStyle: HomeStyle.secondBlogGridImageBox,
                            blogGridContentStyle: HomeStyle.secondBlogGridContentBox,
                            blogGridInnerContentStyle: HomeStyle.secondBlogGridInnerContentBox
            
                        },
            
                        {
            
                            id: HomeStyle.blogGrid3,
                            blogGridImageStyle: HomeStyle.thirdBlogGridImageBox,
                            blogGridContentStyle: HomeStyle.thirdBlogGridContentBox,
                            blogGridInnerContentStyle: HomeStyle.thirdBlogInnerContentBox
            
                        },
                
                        {
            
                            id: HomeStyle.blogGrid4,
                            blogGridImageStyle: HomeStyle.fourthBlogGridImageBox,
                            blogGridContentStyle: HomeStyle.fourthBlogGridContentBox,
                            blogGridInnerContentStyle: HomeStyle.fourthBlogGridInnerContentBox
            
                        }
            
                    ];
            
                    const style = configureStyle[index];
            
                return(
            
                    <div className={HomeStyle.blogGrid} id={style.id} key={blogItem.id}>
            
                        {/** Image Box */}
                        <ThirdBlogInnerMainBlogImageSection
                        
                            style={style}
                            blogItem={blogItem}

                        />             
            
                        {/** Content Box */}
                        <ThirdBlogInnerMainBlogContentSection
                        
                            HomeStyle={HomeStyle}
                            style={style}
                            blogItem={blogItem}
                            index={index}
                            calenderSVG={calenderSVG}
                            authorSVG={authorSVG}
                            readMoreArrow={readMoreArrow}

                        />                       
            
                    </div>
            
                )}) : null }      
            
            </div>

        </>

    );

}

export default Thirdbloginnermainblogsection;