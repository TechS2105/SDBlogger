import React from 'react'; 
import { MdArrowForwardIos } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
import LatestPostTitleSection from '../Latest Post Components/Latestposttitlesection';
import LatestPostMainSectionfrom from './Latestpostmainsection';
import {useNavigate} from 'react-router-dom';

function Latestpostinnercontainer({HomeStyle}){

    const navigate = useNavigate();

    return(

        <>
        
            {/** Latest Post Inner Container */}
            <div className={HomeStyle.latestPostInnerContainer}>

                {/** Title Section */}
                <LatestPostTitleSection
                    
                    HomeStyle={HomeStyle}
                    hoverableArrow={<IoArrowForwardOutline/>}
                    defaultArrow={<MdArrowForwardIos/>}
                    articleNavigation={() => navigate('/articles')}
                    buttonText="View All"

                />

                {/** Latest Post Section */}
                <LatestPostMainSectionfrom
                    
                    HomeStyle={HomeStyle}

                />
                    

            </div>
            
        </>

    );

}

export default Latestpostinnercontainer;