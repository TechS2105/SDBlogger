import React from 'react';

function Thirdbloginnermainblogimagesection({style, blogItem}){

    return(

        <>
        
            {/** Main Blog Title Section */}
            <div className={style.blogGridImageStyle}>
            
                <img src={blogItem.blogImage} alt={blogItem.blogImageAltText} />
            
            </div>

        </>

    );

}

export default Thirdbloginnermainblogimagesection;