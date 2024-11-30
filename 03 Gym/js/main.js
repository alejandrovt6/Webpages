// NAVBAR
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarPlaceholder = document.createElement('div');
    navbarPlaceholder.className = 'navbar-placeholder';
    navbar.parentNode.insertBefore(navbarPlaceholder, navbar.nextSibling);

    const navbarOffset = navbar.offsetTop;

    function stickyNavbar() {
        if (window.pageYOffset >= navbarOffset) {
            navbar.classList.add('fixed');
            navbarPlaceholder.style.display = 'block';
        } else {
            navbar.classList.remove('fixed');
            navbarPlaceholder.style.display = 'none';
        }
    }

    window.onscroll = function() {
        stickyNavbar();
    };
});

// SERVICES
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.querySelector('.accordion-header').addEventListener('click', () => {
            accordion.classList.toggle('active');
        });
    });
});