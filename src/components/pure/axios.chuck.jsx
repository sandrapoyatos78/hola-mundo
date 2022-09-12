import React , {useState, useEffect} from 'react';
import {getRandomChuck } from '../../service/axios-Chuck-servi';

const AxiosChuck = () => {

    const [jokes, setJokes] = useState(null);

    useEffect(() => {
        obteinJoke()
    }, []);

    const obteinJoke = () => {
        getRandomChuck()
        .then((response) => {
            if (response.status ===200) {
                setJokes(response.data.categories)
            }
        })
        .catch((error) => {
            alert (`somethime went wrong: ${error}`)
        })
    }

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
                <button onClick={obteinJoke}>Random JOKE</button>
            </div>
             )
           }
            
        </div>
    );
}

export default AxiosChuck;
