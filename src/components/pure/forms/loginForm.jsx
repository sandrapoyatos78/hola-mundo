/**
 * Componente que va a contener un form para auto
 */
import React, {useState} from 'react';

const LoginForm = () => {

    const iniData = [
        {
            user: '',
            pass: ''
        }
        
    ];
    const [data, setData] = useState(iniData);
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
