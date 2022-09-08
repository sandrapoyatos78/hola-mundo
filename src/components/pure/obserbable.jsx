import React from 'react';
import { getNumber } from '../../service/observableService';
import { useState } from 'react';

const Obserbable = () => {

    const [number, setNumber] = useState(0);
    const obteinNewNumer = () => {
        console.log('subscription to obserbable')
        getNumber.subscribe(
            {
                next(newNumber) {
                    console.log('New number: ', newNumber);
                    setNumber(newNumber);
                },
                error(error) {
                    alert(`errrorr:  ${error}`)
                }, 
                complete() {
                    alert(`finish ${number}` )
                    console.log('done with obserbable')
                }
            }
        )
       
    }
    return (
        <div>
            <h1>NUMBER OBSERBABLE: {number}</h1>
            <button onClick={obteinNewNumer}>obteiun number</button>
        </div>
    );
}

export default Obserbable;
