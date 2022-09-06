import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProfilePage = ({user}) => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={() => navigate('/tasks')}>
                tasks
            </button>
            <button onClick={() => navigate(-1)}>
                GO BACK
            </button>
        </div>
    );
}

export default ProfilePage;
