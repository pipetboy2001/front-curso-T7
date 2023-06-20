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

//description : Funcion que crea las cards de los pokemon
//input: null
//output: null
const cardHTML = (pokemon) => {
    return `<div class="card" style="width: 18rem;">
            <img src="${pokemon.sprites.other.dream_world.front_default}" class="card-img-top" alt="${pokemon.name}">
            <div class="card-body">
                <h4 class="card-title text-center">${pokemon.name}</h4>
            </div>
          </div>`;
};


//description : Funcion que recorre para hacer las card de los pokemon
//input: null
//output: null
const crearPokemonHTML = async () => {
    try {
        const resultados = await pokemones();
        const contenedor = document.querySelector("#pokemon");
        // para cada pokemon en la lista de resultados
        for (let i = 0; i < resultados.length; i++) {
            const pokemon = await infoPokemon(resultados[i].url);
            //'beforeend', es un valor de posición que indica que el HTML se insertará como el último elemento
            contenedor.insertAdjacentHTML('beforeend', cardHTML(pokemon));
        }
    } catch (error) {
        console.log(error);
    }
};
//aplicar la funcion 
crearPokemonHTML();
