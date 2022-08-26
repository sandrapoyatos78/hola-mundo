import React, {useState} from 'react';
// definiendo estilos a traves de constantes

const loggedStyle = {
    color: 'black'
};

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
};

const GrettingStyle = (props) => {
    // generamos un estado para el componente para controlar el logg o no

    const [logged, setLogged] = useState(false);

    return (
        <div style= { logged ? loggedStyle : unloggedStyle }>
        { logged ? 
            (<p>HOLA, {props.name}</p>)
            :
            
            (<p>Please login</p>)
        }
            
            <button onClick={()  => {
                console.log ('Boton pulsado');
                setLogged(!logged);
            }}>
                    { logged ? 'loggout' : 'login' }
                
            </button>
        </div>
    );
}

export default GrettingStyle;
