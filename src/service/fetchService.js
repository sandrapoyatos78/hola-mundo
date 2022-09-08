export const getAllUser = async () => {
    
    let response = await fetch ('https://reqres.in/api/users');
    console.log ('response: ', response)
    console.log('Status: ' ,response.status);
    return response.json()
}
// pagina

export const getAllPagesUser = async (page) => {
    
    let response = await fetch (`https://reqres.in/api/users?page=${page}`);
    console.log ('response: ', response)
    console.log('Status: ' ,response.status);
    return response.json()
}

export const getuserDetails = async (id) => {
    
    let response = await fetch (`https://reqres.in/api/users/${id}`);
    console.log ('response: ', response)
    console.log('Status: ' ,response.status);
    return response.json()
}

export const login = async (email, password) => {
    let body =  {
        email: email , 
        password: password
    }

    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        // mode: 'no-cors',
        // credentials: 'omit',
        // cache: 'no-cache', 
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body),
    });
    console.log ('response: ', response)
    console.log('Status: ' ,response.status);
    console.log ('ok?', response.ok);

    return response.json();
} 