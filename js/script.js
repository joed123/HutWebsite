console.log("Welcome to The Hut Event Center!");

document.addEventListener('DOMContentLoaded', function() {
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
});

document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    var successMessage = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            if (successMessage) {
                successMessage.style.display = 'block';
            }
            var captchaResponse = grecaptcha.getResponse();
            if (!captchaResponse) {
                alert("Please complete the CAPTCHA");
                return;
            }
            if (successMessage) {
                successMessage.style.display = 'block';
            }
            // Optional: Clear the form fields
            this.reset();
            grecaptcha.reset();
        });
    }
});

