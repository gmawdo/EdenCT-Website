import '../styles/globals.css'

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add contacts banner
    console.log('Adding contacts banner...'); // Debug log
    const footer = document.querySelector('footer') || document.body;
    const contactsBanner = document.createElement('div');
    contactsBanner.className = 'contacts-banner';
    contactsBanner.innerHTML = `
        <h3>Contact Our Business Solutions Team</h3>
        <p>Email: business@edenconsignmenttracking.co.uk</p>
    `;
    footer.appendChild(contactsBanner);
    console.log('Contacts banner added:', contactsBanner); // Debug log


    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        console.log('Form submitted:', { name, email, message });

        // Clear the form
        this.reset();

        // Show a success message (you can replace this with a more user-friendly notification)
        alert('Thank you for your message. We will get back to you soon!');
    });
});