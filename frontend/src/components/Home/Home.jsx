import React from 'react';
import HomeStyle from '../../../public/styles/home style folder/Home.module.css';
import FirstBlogParentSection from '../Home/Home First Swiper Blog Components/Firstblogparentsection';
import SecondBlogParentSection from '../Home/Second Blog Components/Secondblogparentcontainer';
import ThirdBlogParentSection from '../Home/Third Blog Components/Thirdblogparentsection';
import BrowseByTopicSection from '../Home/Browse By Topic Components/Browsebytopic';

function Home(){

    return(

        <>
        
            <main>

                {/** Home Page */}

                {/** First Blog Main Section */}
                <FirstBlogParentSection
                
                    HomeStyle={HomeStyle}

                />
                
                {/** Second Blog Main Section */}
                <SecondBlogParentSection
                
                    HomeStyle={HomeStyle}

                />

                {/** Third Blog Main Section */}
                <ThirdBlogParentSection
                
                    HomeStyle={HomeStyle}

                />

                {/** Browse By Topic */}
                <BrowseByTopicSection
                
                    HomeStyle={HomeStyle}

                />

            </main>

        </>

    );

}

export default Home;