function toggleMenu() {
document.getElementById('navbar__mobile-menu').classList.toggle('active');
}
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.tariffs__card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
            } else {
                entry.target.classList.remove('in-viewport');
            }
        });
    }, {
        threshold: 0.5
    });

    cards.forEach(card => observer.observe(card));
});