//Descripción: Función que obtiene los datos de la API y devuelve un parámetro con los resultados
//input: null
//output: Un arreglo con los resultados de la API
const pokemones = async () => {
    try {
        const URL = "https://pokeapi.co/api/v2/pokemon/";
        const response = await fetch(URL);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
};

//Descripcion: Función que obtiene los datos de la API y devuelve una lista de los datos de un pokemon específico
//input: URL de la API
//output: Un arreglo con los resultados de la API
const infoPokemon = async (URL) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

//description : Funcion que arorja console.log
//input: null
//output: null
const debugFuncion = async () => {
    try {
        // Obtener los resultados de la API de pokemones
        const resultados = await pokemones();
        console.log("Resultados de la API de pokemones:", resultados);

        // Obtener información de un pokemon específico
        const URLPokemon = "https://pokeapi.co/api/v2/pokemon/1";
        const datosPokemon = await infoPokemon(URLPokemon);
        console.log("Datos del Pokemon:", datosPokemon);
    } catch (error) {
        console.log(error);
    }
};

// para probar que la api funciona
debugFuncion();

//description : Funcion que crea un elemento HTML
//input: null
//output: null
