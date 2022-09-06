import React from 'react';
import  Button from '@mui/material/Button';
import Copyright from '../../components/pure/copyright';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {

    const navegate = useNavigate();

    const Loggout = () => {
        navegate('/login');
    }
    return (
        <div>

            <Button variant="contained" onClick={Loggout}>hello</Button>
            <Copyright></Copyright>
        </div>
    );
}
export default Dashboard;