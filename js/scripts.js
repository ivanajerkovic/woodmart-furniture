function toggleMobileMenu() {
    const navigationLinks = document.querySelector('.mobile-menu');
    navigationLinks.classList.add('show');
}

window.addEventListener('mouseup', function (e) {
    const navigationLinks = document.querySelector('.mobile-menu');
    const closeOverlay = document.querySelector('.mobile-close-overlay');

    if (event.target === closeOverlay && navigationLinks.classList.contains('show')) {
        navigationLinks.classList.remove('show');
        
    }
});