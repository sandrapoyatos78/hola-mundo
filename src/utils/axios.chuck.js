import axios from "axios";

// default config for Axios chuck

export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io/jokes/random',    // genera chistes aleatorios
        timeout: 6000, 
        responseType: 'json'
    }
)

