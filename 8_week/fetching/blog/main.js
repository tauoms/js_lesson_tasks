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
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error(`Error status: ${response.status}`);
    }

    const json = await response.json();
    displayData(json);
    } catch (error) {
        console.error(error);
    }
    
} 

fetchData();

const displayData = (data) => {
    const postsContainer = document.querySelector('#postsContainer');

    data.forEach ((user) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
        <h2>${user.name}</h2>
        <h3>ID: ${user.id}</h3>
        <h3>username: ${user.username}</h3>
        <h3>${user.email}</h3>
        <h3>${user.phone}</h3>
        <h3>${user.website}</h3>
        <h3>Company: ${user.company.name}</h3>
        `;
        postsContainer.appendChild(postElement);

        // const postHeading = document.createElement("h2");
        // const titleNode = document.createTextNode(json.title);
        // postHeading.appendChild(titleNode);
        // postsContainer.appendChild(postHeading);

        // const postBody = document.createElement("p");
        // const bodyNode = document.createTextNode(json.body);
        // postBody.appendChild(bodyNode);
        // postsContainer.appendChild(postBody);
    });
}
