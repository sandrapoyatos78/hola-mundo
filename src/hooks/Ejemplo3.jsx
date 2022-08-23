/**Ejemplo de HOOKS:
 * -useState()
 * useContext()
 * 
 */

import React, {useState, useContext} from 'react';

const micontesto = React.createContext(null)

// Componente 1 dispone de un contesto que va a tener un valor que recibe desde el padre
const Componente1 = () => {

    // inicializamos un estado vacio que se rellena con los datos del padre
   const state = useContext(micontesto);
    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/* Componente 2*/}
            <Componente2></Componente2>
        </div>
    );
}
const Componente2 = () => {
    const state = useContext(micontesto);
    return (
        <div>
            <h2>
                la sesion es: {state.sesion}
            </h2>
        </div>
    );
}



export default function MicomponeneteconCont() {

    const estadoInicial = {
        token: '1234567', 
        sesion: 1
    }

    //creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actulizarSession() {
        setSessionData(
            {
                token: 'JWT123456789',
                sesion: sessionData.sesion +1
            }
        )
    }
  return (
 <micontesto.Provider value= {sessionData}>
  {/* Todo esto puedo leer los datos de session data */}
  <h1>Ejemplo de useSate y useContext()****</h1>
  <Componente1></Componente1>
  <button onClick={actulizarSession}>Actuliza sesion</button>
 </micontesto.Provider>
  )
}



