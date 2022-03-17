/*esto serpá nuestro archivo donde almacenaraemos peticiones */

// Una buena practica es tener la URL del api en una variable
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

export const   getDataFromPokemon = async (url = BASE_URL) => {
try {

    //crear funcion generica la cual se encarga de hacer una peticion
    //como paremtro vamos a recibir la URL  que puede ser la lista o la
    //que nos dé el detallo.
    const response = await fetch(url);
    const data= await response.json();
    return data;


} catch (error) {
    console.log(error.message);
        
}

}

export default getDataFromPokemon(); // solo usar cuando queremos mostrar una sola funcion si no
// de esta manera

//export {name_function}, {name_function2, etc..};
