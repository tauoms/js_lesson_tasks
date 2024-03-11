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

let apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

const fetchData = async () => {
    try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
    displayData(json);
    } catch (error) {
        console.error(error);
    }
    
} 

fetchData();

const displayData = (data) => {
    const postsContainer = document.querySelector('#postsContainer');
    const navContainer = document.querySelector('#next-prev');

    data.results.forEach ((pokemon) => {
        const postElement = document.createElement('div');

        postElement.innerHTML = `
        <h2>${pokemon.name}</h2>
        `;
        postsContainer.appendChild(postElement);
    });

    const nextBtn = document.createElement('BUTTON');
    nextBtn.textContent = `Next`;
    nextBtn.id = 'nextBtn';
    navContainer.appendChild(nextBtn);
}

const nextBtn = document.querySelector('#nextBtn');

const nextApi = () => {
    apiUrl = data.next;
}

// SEARCH:

const searchInput = document.querySelector('#search-pokemon');

const searchPokemon = () => {

}

searchInput.addEventListener('change', searchPokemon);
// nextBtn.addEventListener('click', nextApi);