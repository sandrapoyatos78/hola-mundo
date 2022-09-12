import Apirequest from "../utils/axios.chuck";

export function getRandomChuck() {
    return Apirequest.get('/'); // nos devuleve la respuesta random, raiz
    
}