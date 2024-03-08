// PROMISE VERSION:
// const fetchData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts') // Promise
//       .then((response) => response.json())
//       .then((json) => displayData(json));
      
// };

// ASYNC AWAIT VERSION:
async function fetchData () {
    const response = await
    fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    displayData(json);
} 

fetchData();

const displayData = (data) => {
    const postsContainer = document.querySelector('#postsContainer');

    data.forEach ((post) => {
        const postElement = document.createElement('div');
        postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>`;
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
