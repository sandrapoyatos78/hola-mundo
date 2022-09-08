import React from 'react';

const AsycEjem = () => {

    async function generateNumber() {
        return (1); // 
    }
    //.then para obtener el valor 
    //.catch nos devuelve un error

    function obtainNumber () {
        generateNumber()
        .then((response) => alert(`response: ${response}`))
        .catch((error) => alert(`something went wrong: ${error}`))
    }
    //.resolve devuelve el dato final
    // .all con todo 
    // .reject genera una promesa rechazada
    // .race 
    // .allsettled 
    // .any (fullfit)

    async function generatePromiseNumber() {
        return Promise.resolve(2)
    }
    function obteneinPromiseNumber () {
        generatePromiseNumber()
        .then((response) => alert(`response: ${response}`))
        .catch((error) => alert(`something went wrong: ${error}`))
    }

    async function saveSessionStorage(key, value) {
        sessionStorage.setItem(key, value);

        return Promise.resolve(sessionStorage.getItem(key))
    }

    function showStorage() {
        saveSessionStorage('name', 'Sandra')
        .then((response) => { // este response es el resolve de la promesa
            let value = response;
            alert(`save name: ${value}`);
        }).catch((error) => {
            alert(`save error: ${error}`);
        }).finally(() => {
             console.log ('SUCCESS: name saved and retrevid successfully')
             alert('SUCCESS- NAME SAVED');
            })
    }

    async function obtainMessage() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('hello world'), 2000)
        });
        let message = await promise;

        await alert(`message recived: ${message}`)
    }
    const returnError = async() => {
        await Promise.reject(new Error ('ooppss'));
    }
        const consuError = () => {
            returnError()
            .then((response) => alert(`everything is ok ${response}` ))
            .catch((error) => alert(`save error: ${error}`))
            .finally(() => alert('finally executed'))
    }

    const urlNotFound = async() => {
        try {
            // NOS DEVUELVE UN VALOR FUTURO DE UN HTTP
            let resolve = await fetch ('https://invalidURL')
            alert(`response ${JSON.stringify(resolve)}`)
        } catch (error) {
            alert(`save error with your URL: ${error} (check por console)`)
        }
    }
    // gestionar varias promesas a la vez
    const multiPromise = async () => {
        let resulte = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch((error) => alert(`someyhing went wrong:  ${error} `))

    }

    return (
        <div>
        <h1>ASYNC PROMISE EXAMPLE</h1>
        <button onClick={obtainNumber}>obtener nº</button>
        <button onClick={obteneinPromiseNumber}>obtener nº Promise</button>
        <button onClick={showStorage}>SAVE NAME AND SHOW</button>
        <button onClick={obtainMessage}>Sent message to 2º seg</button>
        <button onClick={consuError}>obtein error</button>
        <button onClick={urlNotFound}> error URL NOT FOUND</button>
        <button onClick={multiPromise}> error obtenido</button>
        </div>
    );
}

export default AsycEjem;
