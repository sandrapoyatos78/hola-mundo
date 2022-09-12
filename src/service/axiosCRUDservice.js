import axios from "axios";

/**
 * Login method
 * @param {*} email 
 * @param {*} password 
 */
export const login= (email, password) => {

    let body = {
        email: email,
        password:password
    }
    // returns the promise with response
    return axios.post('https://reqres.in/api/login',body )
}

// TODO obtain all users

// obtain all user
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users');
}

// obtain por paginado

export const getAllUsersPage = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`);
}
// TODO obtain user by ID

export const getUserbyId = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`);
}
// TODO Create user

export const createUser = (name, job) => {

    let body = {
        name: name,
        job:job
    }
    // returns the promise with response
    return axios.post('https://reqres.in/api/users',body )
}
// TODO UPDATE user

export const updateUserById = (id, name, job) => {

    let body = {
        name: name,
        job:job
    }
    // returns the promise with response
    return axios.put(`https://reqres.in/api/users/${id}`,body )
}
// TODO delete user

export const deleteUserbyId = (id) => {
    return axios.delete(`https://reqres.in/api/users/${id}`);
}