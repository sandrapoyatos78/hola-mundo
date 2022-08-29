import React , {useState} from 'react';
import Child from '../pure/child';

const Father = () => {

    const [name, setName] = useState('SAN');

    function showMessagge(text) {
        alert(`message recived:  ${text}`)

    }

    function updateName (newName) {
        setName(newName)
    }
    return (
        <div style={{background: 'tomato', padding: '10px'}}>
            <Child name={name} send={showMessagge} update={updateName}></Child>
        </div>
    );
}

export default Father;
