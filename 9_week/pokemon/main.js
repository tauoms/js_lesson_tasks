// PROMISE VERSION:
// const fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts') // Promise
//       .then((response) => response.json())
//       .then((json) => { 
//         displayData(json);
//         console.log(json);
//     });
// };

// ASYNC / AWAIT VERSION:

let apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=500&offset=0';

let pokemonsArr = [];

const fetchData = async () => {
    try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
    }

    const json = await response.json();
    // console.log(json);
    pokemonsArr = json.results;

    displayData(pokemonsArr);

    } catch (error) {
        console.error(error);
    }
    
} 


fetchData();

const displayData = (data) => {
    const pokemonContainer = document.querySelector('#pokemonContainer');
    pokemonContainer.innerHTML = '' // Clear previous display data

    data.forEach ((pokemon) => {
        const pokemonCard = document.createElement('div')

        fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemonData) => {
                const types = pokemonData.types.map((typeObj) => typeObj.type.name).join(', ');

                pokemonCard.innerHTML = `
                    <img src="${pokemonData.sprites.other['official-artwork'].front_default}">
                    <h2>${pokemonData.name}</h2>
                    <p>
                    ID: ${pokemonData.id}<br>
                    Height: ${pokemonData.height / 10}m<br>
                    Weight: ${pokemonData.weight / 10}kg<br>
                    Type(s): ${types}
                    </p>
                    `;
                    pokemonContainer.appendChild(pokemonCard);
                    })
                    
                });

}

// SEARCH:

const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

const searchPokemon = debounce((searchTerm) => {
    const filteredData = pokemonsArr.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    displayData(filteredData);
}, 300);

document.querySelector('#search-pokemon').addEventListener('input', (e) => searchPokemon(e.target.value));