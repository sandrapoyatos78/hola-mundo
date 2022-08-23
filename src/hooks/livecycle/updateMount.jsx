/**
 * Ejemplo de método DidUpdate componente clase 
 * y uso de Hook en componente funcional
 * 
 */

import React, { Component, useEffect } from 'react';

export class UpdateMount extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe new propos o cambio en su estado privado')
    }
    render() {
        return (
            <div>
                <h1>DID UPDATE</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe new propos o')
     });
// no ponemos corchetes, asi se ejecutará todas las veces
    return (
        <div>
           <h1>DID UPDATE</h1>
        </div>
    );
}
