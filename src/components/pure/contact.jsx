import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import {ComponentB} from '../pure/componentB';

function ContactComponentA ({contact}) {
    
    return (
        <div>
            <h2>
               NOMBRE: { contact.name }
            </h2>
            <h3>
               APELLIDO: { contact.apellido }
            </h3>

            <h4>
               EMAIL: { contact.email }
            </h4>
            <ComponentB estado={true}>
            </ComponentB>
           
        </div>
    );
};


ContactComponentA.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ContactComponentA;
