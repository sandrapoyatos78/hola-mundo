import React, {useState} from 'react';

let red = 0;
let green = 200;
let blue = 150;

// estilo para user login o logout

const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white', 
    fontWeight: 'bold'
};
// estilo para user no logeado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
};

// Login / Logout buttons
const LoginButton = ({loginAction, propstyle}) => {
    return (
        <button style = {propstyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction , propstyle}) => {
    return (
        <button style = {propstyle} onClick={logoutAction}>Logout</button>
    )
}
const OptionalRender = () => {
    const [acces, setAcces] = useState(true);

    const [nMessages, setNmessages] = useState(0);

    const addMessages = () => {
        setNmessages (nMessages +1);
    }

    // const updateAcces = () => {
    //     setAcces (!acces);
    // }


    const loginAction = () => {
        setAcces (true)
    }
    const logoutAction = () => {
        setAcces (false)
    }

    let optionalButton; 

    // if (acces) {
    //     optionalButton = <button onClick={updateAcces}>Logout</button>
    // } else {
    //     optionalButton = <button onClick={updateAcces}>Login</button>
    // }

    if (acces) {
        optionalButton = <LogoutButton propstyle={unloggedStyle} logoutAction = {logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propstyle={loggedStyle}  loginAction={loginAction}></LoginButton>
    }

    return (
        <div >
        {/* optional button */}
            {optionalButton}

            {/* n messages unread */}
            { nMessages > 0 && nMessages ===1 && <p>Your have { nMessages} sms</p> }
            { nMessages > 1 && <p> Tienes { nMessages} sms </p> }
            { nMessages === 0 && <p> no tienes sms</p> }
        <button onClick={addMessages}>{ nMessages === 0 ? 'add you first sms' : 'add new sms'  }</button>
        </div>
    );
}

export default OptionalRender;
