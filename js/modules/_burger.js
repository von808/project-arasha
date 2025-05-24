const burger = () => {
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
};

export { burger };
