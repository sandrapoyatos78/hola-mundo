
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Greetingf = (props) => {
// breve intro de USESTATE
// constante [variable, metodo para act ]= useState(valor inicial)

const [age, setage] = useState(29);

const birthday =() => {
    //actualizamos el Stage
    setage(age +1);
}
    return (
        <div>
            <h1>
            hola {props.name} DESDE COMPONENTE FUNCIONAL!
            </h1>
            <h2>
                Tu edad es de  {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    cumplir años
                </button>
            </div>
            
        </div>
    );
};


Greetingf.propTypes = {
    name : PropTypes.string,
};

export default Greetingf;