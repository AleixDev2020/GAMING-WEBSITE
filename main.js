document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        if (!mainNav.contains(e.target) && !menuButton.contains(e.target)) {
            mainNav.classList.remove('active');
            menuButton.classList.remove('active');
        }
    });

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.classList.toggle('active');
                
                dropdowns.forEach(other => {
                    if (other !== this) {
                        other.classList.remove('active');
                    }
                });
            }
        });
    });
}); 