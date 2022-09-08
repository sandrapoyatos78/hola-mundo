import React , {useState, useEffect} from 'react';
import {getRandomUser } from '../../service/axios-service';

const AxiosExam = () => {

    const [user, setUser] = useState(null);

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
           <h1>axios example</h1>
           {user != null ? 
           (
                <div>
                    <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
                    <h3>{user.email}</h3>
                </div>
           ):
           (
            <div>
                <p>Generate new user</p>
                <button onClick={getRandomUser}>random user</button>
            </div>
             )
           }
        </div>
    );
}

export default AxiosExam;
