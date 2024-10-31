document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuButton.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        
        // Anima el icono hamburguesa
        this.classList.toggle('active');
    });

    // Para móviles, hacer que los dropdowns sean tocables
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.toggle('active');
            }
        });
    });
}); 