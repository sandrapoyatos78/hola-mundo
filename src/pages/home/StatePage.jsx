import React from 'react';
import { useLocation } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation();

   
    //console.log('Query param', location.search); // quey params Sent
    return (
        <div>
        {/* <h1>State: {location.state.online}</h1> */}
            
        </div>
    );
}

export default StatePage;
