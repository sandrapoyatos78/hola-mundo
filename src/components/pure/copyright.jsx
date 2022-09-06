import React from 'react';
// material UI COMPONENTS
import Link from '@mui/material/Link';
import  Typography  from '@mui/material/Typography';

const Copyright = () => {
    return (
        <Typography variant= "body2" color="GrayText" align="center">
            {'CopyRight (C) '}
            <Link color='inherit' href='https://porelmundolowcost.com'>
                porelmundolowcost
            </Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default Copyright;
