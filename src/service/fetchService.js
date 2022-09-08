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