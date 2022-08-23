// ejemplo de uso del HOOK useState, crear un componente Func, acceder al estado privado a traves de un HOOK y poder modificarlo
// para componentes funcionales, no tienen contructor, ni metodos

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // valor inicial para contador
    const valorInicial = 0;

    const valorIniperson = {
        nombre : 'sandra',
        email : 'sandru76',

    };
    /**
     * Queremos que el valor inicial y persona inicial sean parte del estado del componente para asi 
     * gestionar su cambio y que este se vea reflejado en la vista del componente
     * const [nombrevariable, funcionparacambiar] = useState(valor inical)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(valorIniperson);

    /**
     * Funcion para actualizar el estado que contiene el contador
     */
    function incrementacontador() {
        //
        setContador(contador +1);

    }
    /**
     * Funcion para actualizar el estado de persona en el componente
     */


    function actualizapersona() {
        setPersona(
            {
                nombre: 'Pep',
                email: 'peep@gmail'
            }
        )
    }
    return (
        <div>
            <h1>***ejemplo de useState()***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2> Datos de la PERSONA:</h2>
            <h3 > NOMBRE: {persona.nombre}  </h3>
            <h3 > EMAIL: {persona.email}  </h3>

            <button onClick={incrementacontador} >Increntar contador</button>
            <button onClick={actualizapersona} >Increntar contador</button>
        </div>
    );
}

export default Ejemplo1;
