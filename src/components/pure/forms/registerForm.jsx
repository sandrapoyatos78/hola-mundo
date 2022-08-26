import React, { useState } from 'react';

const RegisterForm = () => {
    const inicredencial = [
        {
            user: '',
            name : '',
            email: '',
            pass: ''
        }
        
    ];
    const [credencial, setCredencial] = useState(inicredencial);
    return (
        <div>
            
        </div>
    );
}

export default RegisterForm;
