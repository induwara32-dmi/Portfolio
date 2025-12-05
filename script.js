// Add a subtle effect to the header when scrolling
const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Add a class that adds a stronger shadow to the header
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});