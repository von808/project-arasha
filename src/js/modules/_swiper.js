function swipers() {
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

export { swipers };
