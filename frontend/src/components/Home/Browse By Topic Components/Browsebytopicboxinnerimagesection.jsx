import React from 'react';

function Browsebytopicboxinnerimagesection({HomeStyle, idx, isActiveIdx, blogItem}){

    return(

        <>
        
            {/** Topic Box Inner Image Section */}
            <div 
                                                    
                className={HomeStyle.topicBoxImageDiv} 
                style={{
                                                        
                    height: isActiveIdx === idx ? '0%' : '50%',
                    transition: 'all 0.5s ease'
            
                }}
                                                    
            >
            
                <img 
                                                    
                    src={blogItem.blogImage} 
                    alt={blogItem.blogImageAltText} 
                    style={{
                                                            
                        transform: isActiveIdx === idx ? 'translateY(-200px)' : 'translateY(0px)',
                        transition: 'all 0.5s ease'
            
                    }}
                                                        
                />
            
            </div>

        </>

    );

}

export default Browsebytopicboxinnerimagesection;