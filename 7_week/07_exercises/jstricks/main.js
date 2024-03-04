const backToTopBtn = document.querySelector('#backToTop');

// const getToTop = () => {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// } 

backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} );