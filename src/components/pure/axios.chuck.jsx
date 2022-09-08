import React , {useState, useEffect} from 'react';
import {getRandomUser } from '../../service/axios-Chuck-servi';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const AxiosChuck = () => {

    const [jokes, setJokes] = useState(null);

    useEffect(() => {
        getRandomUser()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                alert (`somethime went wrong: ${error}`)
            })

    }, []);

    return (
        <div>
            <h1>JOKES:</h1>
           {jokes != null ? 
           (
                <div>
                    <h2>{jokes.value}</h2>
            
                </div>
           ):
           (
            <div>
                <p>Generate JOKE</p>
                <button onClick={getRandomUser}>random JOKE</button>
            </div>
             )
           }
            
        </div>
    );
}

export default AxiosChuck;
