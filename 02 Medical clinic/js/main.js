// HEAD CARROUSEL
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.head-img img');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); 
});

// RESPONISVE MENU
const nav = document.querySelector('#navbar');
const open = document.querySelector('#open');
const close = document.querySelector('#close');

open.addEventListener('click', () => {
    nav.classList.add('visible');
});

close.addEventListener('click', () => {
    nav.classList.remove('visible');
});

document.addEventListener('click', (event) => {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnOpen = open.contains(event.target);

    if (!isClickInsideNav && !isClickOnOpen) {
        nav.classList.remove('visible');
    }
});