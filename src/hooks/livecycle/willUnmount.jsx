/**Ejemplo para controlar cuando el componente va a desaparecer
 * Component willUnMount para clase
 * uso de hooks para componente funcional
 */

import React, { Component, useEffect} from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componenete desaparezca')
    }
    render() {
        return (
            <div>
                <h1>will UNMOUNT</h1>
            </div>
        );
    }
}

export const WillunmountHook = () => {

    useEffect(() => {
        // aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que desaparezca')
        };
    }, []);
    

    return (
        <div>
           <h1>will Unmount</h1>
        </div>
    );
}


