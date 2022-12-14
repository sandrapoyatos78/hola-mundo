import React from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';

const AboutPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    console.log("we are, ", location.pathname);
    return (
        <div>
            <h1>
                About | FAQS 
            </h1>

        <div>
            <button onClick={ () => navigate('/')}>
                GO TO HOME
            </button>
            <button onClick={() => navigate(-1)}>
                GO BACK
            </button>
        </div>
        </div>
    );
}

export default AboutPage;
