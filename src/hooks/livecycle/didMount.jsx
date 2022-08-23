/**Ejemplo de uso de ciclo de vida en componente clase
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que se añada al DOM')
    }
    render() {
        return (
            <div>
                <h1>DID MOUNT</h1>
            </div>
        );
    }
}
/**
 * Ejemplo de uso de ciclo de vida en hook (componenete funcional)
 */


export const DidmountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que se añada al DOM');
    }, []);
// no ponemos nada en los corchetes, solo se ejecutará una vez.
    return (
        <div>
           <h1>DID MOUNT</h1>
        </div>
    );
}




