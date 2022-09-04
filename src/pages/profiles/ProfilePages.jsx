import React from 'react';
import {  useNavigate  } from 'react-router-dom';

const ProfilePages = ({user}) => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>
                YOUR PROFILE
            </h1>
            <button onClick={ () => navigate('/')}>Your Tasks</button>
            <button onClick={ () => navigate('/')}>
                GO TO BACK
            </button>
        </div>
    );
}

export default ProfilePages;
