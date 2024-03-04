const backToTopBtn = document.querySelector('#backToTop');
const header = document.querySelector('header');
const mobileBtn = document.querySelector('.mobile');
const navUl = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
const modalBtn = document.querySelector('.modalBtn');
const modalOverlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.closeBtn');

// const getToTop = () => {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// } 

backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // Chrome, FF and others
    // header.style.backgroundColor = 'orange';
    // header.classList.add("bg");
    // header.classList.remove('bg');

} );

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
    
    if (
        document.body.scrollTop > 200 || 
        document.documentElement.scrollTop > 200) {
      backToTopBtn.style.visibility = 'visible';
      backToTopBtn.style.opacity = '1';
      header.classList.add('bg');

    } else {
      backToTopBtn.style.visibility = 'hidden';
      backToTopBtn.style.opacity = '0';
      header.classList.remove('bg');
    }
  }

  const toggleMobMenu = () => {
    navUl.classList.toggle('responsive')
  }

  const toggleModal = () => {
    modalOverlay.classList.toggle('visible');
  }

  mobileBtn.addEventListener('click', toggleMobMenu);
  menuItems.forEach(item => item.addEventListener('click', toggleMobMenu));

  modalBtn.addEventListener('click', toggleModal);
  closeBtn.addEventListener('click', toggleModal);
  modalOverlay.addEventListener('click', toggleModal);