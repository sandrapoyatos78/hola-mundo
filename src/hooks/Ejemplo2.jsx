/**Ejemplo de uso de UseState()
 * useRef() identificar valores, elementos dentro de la vista
 * useEffect() controlar los cambios en la vista
*/

import React, { useRef, useState, useEffect } from 'react';

const Ejemplo2 = () => {

    // creamos dos contadores, cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vistaHTML)
    // referencia desde el controlador a la vista

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1);

    }

    function incrementar2() {
        setContador2(contador2 + 1);

    }

    /**
     * CASO 1: useEffect caso 1: Ejecutar SIEMPRE un snippet de codigo
     * cada vez que hay un cambio en el estado del componente, 
     * se ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(() => {
    //    console.log('CAMBIO EN EL ESTADO');
    //     console.log ('mostrando referencia a elemento del DOM');
    //     console.log (miRef);

    // })

    /**
     * CASO 2: Ejecutar solo cuando cambie el contador 1
     * cada vez que haya un cambio en el contador 1 se ejecuta
     * lo que diga el useEffect, en caso de que cambie el contador 2 
     * no habra ejecucion
     */


    // useEffect(() => {
    //     console.log('CAMBIO EN EL CONTADOR 1');
    //   console.log ('mostrando referencia a elemento del DOM');
    //   console.log (miRef);

    // }, [contador1]);

    /**
     * CASO 2: Ejecutar cuando cambie el contador 1 o 2
     * cada vez que haya un cambio en el contador 1 o 2 se ejecuta
     * se ejecutara lo de dentro del useEffect, y lo controlas con el array[]
     */

    useEffect(() => {
        console.log('CAMBIO EN EL CONTADOR 1 o 2');
        console.log('mostrando referencia a elemento del DOM');
        console.log(miRef);

    }, [contador1, contador2]);

    return (
        <div>
            <h1>***ejemplo de useState(), useREFE(), USEeFFECT()***</h1>
            <h2>coNTADOR 1: {contador1}</h2>
            <h2>coNTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Elemento de  referencia
            </h4>

            <div>
                <button onClick={incrementar1}>incrementar 1</button>
                <button onClick={incrementar2}>incrementar 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
