// Existing scroll effect
const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- NEW: Mobile Menu Toggle Logic ---
const menuToggle = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Change icon from Bars to "X" when open
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when a link is clicked
document.querySelectorAll('.navbar nav a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
    });
});
