document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navBar = document.getElementById('nav-bar');
    const burgerIcon = document.getElementById('burger-icon');
    const closeIcon = document.getElementById('close-icon');

    burgerMenu.addEventListener('click', function() {
        if (navBar.classList.contains('show')) {
            // Cerrar el menú y revertir la rotación
            navBar.classList.remove('show');
            burgerIcon.style.transform = 'rotate(0deg)';
            closeIcon.style.display = 'none';
            burgerIcon.style.display = 'block';
        } else {
            // Abrir el menú y rotar el icono
            navBar.classList.add('show');
            burgerIcon.style.transform = 'rotate(180deg)'; // Rotar 180 grados
            closeIcon.style.display = 'block'; // Mostrar el icono de cierre
            burgerIcon.style.display = 'none'; // Ocultar el icono de hamburguesa
        }
    });

    closeIcon.addEventListener('click', function() {
        // Cerrar el menú al hacer clic en el icono de cierre
        navBar.classList.remove('show');
        burgerIcon.style.transform = 'rotate(0deg)';
        closeIcon.style.display = 'none';
        burgerIcon.style.display = 'block';
    });
});
