/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import PropTypes from 'prop-types';

function componentB  (estado){
    const [conectado, setconet] = useState(estado);
    return (
        <div>
        <h3>
            {conectado=== false ? 'no Conectado' : 'Esta en linea'}
        </h3>
        <button onClick={() => setconet(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
        </div>
    );
};
componentB.prototype = {
    estado: PropTypes.bool
};

export default componentB;
