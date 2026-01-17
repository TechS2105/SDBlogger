import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import {Outlet} from 'react-router-dom';

const customStyle = {

    width: "100%",
    height: "100%"

}

function Rootlayouts(){

    return(

        <>
        
            {/** Rootlayouts */}
            <NavBar />
            <div style={customStyle}>

                <Outlet />

            </div>

        </>

    );

}

export default Rootlayouts;