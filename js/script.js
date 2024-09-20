console.log("Welcome to The Hut Event Center!");

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.nav-container');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function(event) {
            event.stopPropagation();
            nav.classList.toggle('active');
            console.log('Hamburger clicked, menu toggled');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
                nav.classList.remove('active');
                console.log('Menu closed');
            }
        });

        // Prevent clicks inside the menu from closing it
        nav.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    } else {
        console.error('Hamburger menu or nav container not found');
    }

    // Carousel functionality
    const carousels = document.querySelectorAll('.carousel');
    if (carousels.length > 0) {
        carousels.forEach((carousel, index) => {
            const carouselInstance = new bootstrap.Carousel(carousel, {
                interval: 6000,
                wrap: true
            });
            console.log(`Carousel ${index + 1} initialized`);
        });
    } else {
        console.error('No carousels found');
    }
});