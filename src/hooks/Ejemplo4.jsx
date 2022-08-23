/**
 * Ejemplo para entender el uso de props.children */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de children propos**</h1>
            <h2>    
            nombre:{props.nombre}
            </h2>
            {/* props.children pinta todo que se encuentre en las etiquetas
            de app.js desde el componente de orden superior*/}
            {props.children}
        </div>
    );
}

export default Ejemplo4;


