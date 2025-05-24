document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.burger-btn')) {
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerClose = document.querySelector('.burger-menu__close');
    const burgerOverlay = document.querySelector('.burger-overlay');
    const burgerContent = document.querySelectorAll('.burger-menu__header , .burger-menu__content');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerIcon = document.querySelector('.burger-icon');

    burgerBtn.addEventListener('click', () => {
      burgerToggle();
    });
    burgerClose.addEventListener('click', () => {
      burgerToggle();
    });
    burgerContent.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation;
      });
    });
    burgerOverlay.addEventListener('click', (e) => {
      if (e.target.classList.contains('burger-overlay') || e.target.classList.contains('burger-menu')) {
        burgerToggle();
      }
    });

    function burgerToggle() {
      burgerMenu.classList.toggle('burger-menu--open');
      document.body.classList.toggle('no-scroll');
    }
  }
  if (document.querySelector('.sayasat-swiper')) {
    const sayasatSwiper = new Swiper('.sayasat-swiper', {
      a11y: false,
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      speed: 300,
      breakpoints: {
        768: {
          spaceBetween: 20,
        },
        991: {
          spaceBetween: 20,
          autoplay: {
            delay: 0,
          },
          speed: 2000,
        },
      },
    });

    const sayasatSwiperContainer = document.querySelector('.sayasat-swiper');
    sayasatSwiperContainer.addEventListener('mouseenter', () => {
      sayasatSwiper.autoplay.stop();
    });
    sayasatSwiperContainer.addEventListener('mouseleave', () => {
      sayasatSwiper.autoplay.start();
    });
  }
  if (document.querySelector('.language')) {
    const langBtn = document.querySelector('.language__btn');

    langBtn.onclick = function () {
      langBtn.classList.toggle('language-active');
    };
  }
});
