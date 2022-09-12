import axios from "axios";

// default config for Axios

export default axios.create(
    {
        baseURL: 'https://randomuser.me/api',    // genera user aleatorios
        timeout: 6000, 
        responseType: 'json'
    }
)


