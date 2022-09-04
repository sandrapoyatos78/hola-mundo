import React from 'react';
import {  useNavigate  } from 'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();

    
    return (
        <div>
                    <h1>home pages</h1>
                    <button onClick={ () => navigate('/profile')}>
                GO TO PROFILE
            </button>
  
               
        </div>
    );
}

export default HomePage;
