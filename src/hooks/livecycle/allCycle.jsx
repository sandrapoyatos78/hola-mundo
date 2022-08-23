import React, { useEffect }from 'react';

const AllCycle = () => {
    useEffect(() => {
        
        console.log ('Componente creado')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualozacion del componete')
        }, 1000);
 
        return () => {
            console.log('Componente va a desaparecer')
            document.title = "Tiempo detenido"
            clearInterval(intervalID);
        };
    }, []);


    return (
        <div>
            
        </div>
    );
}

export default AllCycle;
