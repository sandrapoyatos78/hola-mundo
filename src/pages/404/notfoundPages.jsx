import React from 'react';
import {  useNavigate  } from 'react-router-dom';

const NotfoundPages = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>404-NOT FOUND</h1>
            <button onClick={ () => navigate('/')}>
                GO TO BACK home
            </button>
        </div>
    );
}

export default NotfoundPages;
