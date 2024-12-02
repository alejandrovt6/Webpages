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
        const header = accordion.querySelector('.accordion-header');
        const body = accordion.querySelector('.accordion-body');

        header.addEventListener('click', () => {
            // Cierra acordeón abierto
            accordions.forEach(item => {
                if (item !== accordion && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-body').style.maxHeight = null;
                }
            });

            // Abre o cierra el acordeón actual
            accordion.classList.toggle('active');
            
            if (accordion.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = null;
            }
        });
    });
});

