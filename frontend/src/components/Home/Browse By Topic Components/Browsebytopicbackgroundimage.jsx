import React from 'react';

function Browsebytopicbackgroundimage({isActiveIdx, blogItem, idx}){

    return(

        <>
        
            {/** Background Image */}
            <img 
                                                
                src={blogItem.blogImage} 
                alt={blogItem.blogImageAltText} 
                style={{
            
                    opacity: isActiveIdx === idx ? '1' : '0',
                    transition: 'all 0.5s ease'
            
                }}
                                                    
            />

        </>

    );

}

export default Browsebytopicbackgroundimage;