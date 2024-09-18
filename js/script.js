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

    /* Contact form functionality
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const captchaResponse = grecaptcha.getResponse();
            if (!captchaResponse) {
                alert("Please complete the CAPTCHA");
                return;
            }

            try {
                // Replace with your actual form submission logic
                // This is just a placeholder to simulate form submission
                await new Promise(resolve => setTimeout(resolve, 1000));

                if (successMessage) {
                    successMessage.style.display = 'block';
                    errorMessage.style.display = 'none';
                }
                this.reset();
                grecaptcha.reset();
            } catch (error) {
                console.error('Form submission error:', error);
                if (errorMessage) {
                    errorMessage.style.display = 'block';
                    successMessage.style.display = 'none';
                }
            }
        });
    } else {
        console.error('Contact form not found');
    } */

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