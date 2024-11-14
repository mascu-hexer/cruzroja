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

    const offset = 65; // Desplazamiento adicional en píxeles

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                // Permitir que el enlace recargue la página
                return;
            }

            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        loop: true,
        centeredSlidesBounds: true,
        
        pagination: {
          el: '.swiper-pagination',
        },
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        autoplay: {
            delay: 10000, 
            disableOnInteraction: false,
          },
    });
});