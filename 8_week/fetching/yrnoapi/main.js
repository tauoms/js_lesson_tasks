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
const fetchData = async () => {
    try {
    const response = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.192059&lon=24.945831');
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
        const postElement = document.createElement('div');

        postElement.innerHTML = `
        <h2>Helsinki</h5>
        <h1>${data.properties.timeseries[4]?.data.instant.details.air_temperature}</h1>
        <h2>${data.properties.timeseries[4]?.data.next_6_hours.summary.symbol_code}</h2>
        <p>${data.properties.timeseries[4]?.time}</p>

        `;
        postsContainer.appendChild(postElement);
    
}

