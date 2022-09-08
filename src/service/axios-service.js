import Apirequest from "../utils/axios.confi";

export function getRandomUser() {
    return Apirequest.get('/',  { 
        validateStatus: function (status) {
        return status < 500; // Resuelve solo si el código de estado es menor que 500
      }}); // nos devuleve la respuesta random, raiz
    
}