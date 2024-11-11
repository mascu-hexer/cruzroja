document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navBar = document.getElementById('nav-bar');
    const burgerIcon = document.getElementById('burger-icon');
    const closeIcon = document.getElementById('close-icon');

    burgerMenu.addEventListener('click', function(event) {
        if (event.target === closeIcon) {
            return;
        }

        if (navBar.classList.contains('show')) {
            navBar.classList.remove('show');
            closeIcon.style.display = 'none';
            burgerIcon.style.display = 'block';
        } else {     
            navBar.classList.add('show');
            closeIcon.style.display = 'block';
            burgerIcon.style.display = 'none';
        }
    });

    closeIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        navBar.classList.remove('show');
        closeIcon.style.display = 'none';
        burgerIcon.style.display = 'block';
    });
});