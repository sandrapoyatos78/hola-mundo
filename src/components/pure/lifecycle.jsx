/**
 * Ejemplo de componente tipo clase que dispone de 
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifecycleExample extends Component {

    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WILL MOUNT: ANTES DEL MONTAJE DEL COMPONENTE')
    }

    componentDidMount() {
        console.log('DID MOUNT: JUSTO AL ACABAR EL MONTAJE, antes de pintarlo')

    }

    componentWillReceiveProps(nextProps) {
        console.log('WILL RECIVE PROPS: Si va a recibir new props')

    }

    shouldComponentUpdate(nextProps, nextState) {
        // RETURNE true/ false
        /**
         * Sirve para controlar si debe o no actualizarse
         *  */
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILL UDDATE PROPS: JUSTO antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('did RECIVE: JUSTO despues de actualizarse')

    }

    componentWillUnmount() {
        
        console.log('WILL UNMOUNT: JUSTO antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifecycleExample.propTypes = {

};

export default lifecycleExample;