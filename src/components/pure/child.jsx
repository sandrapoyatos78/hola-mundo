import React, {useRef } from 'react';

const Child = ({name, send, update}) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton() {
        const text = messageRef.current.value;
        alert(` text in input:  ${text}`);
    }
    
    
    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }
    //recibe el evento por defecto desde el form ONSUBMIT y con el preventDefault
    // evitamos que se recargue la pagina
    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }

    
    return (
        <div style={{background: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => console.log ('ON MOUSE over')}>
            hello, {name}
            </p>
            <button onClick={ () => console.log ('boton 1 pulsado')}>BOTON 1</button>
            <button onClick={ () => (pressButtonParams('hello'))}>BOTON 2</button>
            <button onClick={pressButton}>BOTON 3</button>
            <input 
            onFocus={() => console.log('input FOCUSED')}
                onChange= {(e) => console.log('changed', e.target.value)}
                onCopy= {() => console.log('copy')}
               placeholder = 'send a text to your fathher'
                ref={messageRef}
            />
            <button onClick={() => send(messageRef.current.value)}>send message</button>

            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref= {nameRef} placeholder='new name'></input>
                    <button type='submit'>update name</button>
                </form>

            </div>
        </div>
    );
}

export default Child;
