document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.header')) {
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const navBar = document.querySelector('.nav-bar-wrapper');
    function navBarFixed(header, navBar) {
      let headerH = header.clientHeight;
      let navBarH = navBar.clientHeight;
      let windowScroll = Number(window.scrollY.toFixed());
      // console.log(headerH);
      // console.log(windowScroll);
      if (windowScroll > headerH) {
        navBar.classList.add('fixed');
        main.style.paddingTop = `${navBarH}px`;
      } else {
        navBar.classList.remove('fixed');
        main.style.paddingTop = null;
      }
    }
    window.addEventListener('scroll', () => {
      navBarFixed(header, navBar);
    });
  }
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
  if (document.querySelector('.swiper')) {
    const sayasatSwiper = new Swiper('.sayasat-swiper', {
      a11y: false,
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
      speed: 300,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
          autoplay: {
            delay: 5000,
          },
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
    sayasatSwiper.autoplay.start();
    const sayasatSwiperContainer = document.querySelector('.sayasat-swiper');
    sayasatSwiperContainer.addEventListener('mouseenter', () => {
      sayasatSwiper.autoplay.stop();
    });
    sayasatSwiperContainer.addEventListener('mouseleave', () => {
      sayasatSwiper.autoplay.start();
    });

    const swiperFoursWrappers = document.querySelectorAll('.swiper-four-wrapper');
    swiperFoursWrappers.forEach((swiperFoursWrapper) => {
      const swiper = swiperFoursWrapper.querySelector('.swiper-four');
      const swiperBtnNext = swiperFoursWrapper.querySelector('.swiper-btn-next');
      const swiperBtnPrev = swiperFoursWrapper.querySelector('.swiper-btn-prev');

      const swiperFour = new Swiper(swiper, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: swiperBtnNext,
          prevEl: swiperBtnPrev,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });
    });

    const swiperThreeWrappers = document.querySelectorAll('.swiper-three-wrapper');
    swiperThreeWrappers.forEach((swiperThreeWrapper) => {
      const swiper = swiperThreeWrapper.querySelector('.swiper-three');
      const swiperBtnNext = swiperThreeWrapper.querySelector('.swiper-btn-next');
      const swiperBtnPrev = swiperThreeWrapper.querySelector('.swiper-btn-prev');

      const swiperThree = new Swiper(swiper, {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: swiperBtnNext,
          prevEl: swiperBtnPrev,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        breakpoints: {
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    });

    const swiperWorldNewsWrappers = document.querySelectorAll('.world-news-swiper-wrapper');
    swiperWorldNewsWrappers.forEach((swiperWorldNewsWrapper) => {
      const swiper = swiperWorldNewsWrapper.querySelector('.world-news-swiper');
      const swiperBtnNext = swiperWorldNewsWrapper.querySelector('.swiper-btn-next');
      const swiperBtnPrev = swiperWorldNewsWrapper.querySelector('.swiper-btn-prev');

      const swiperWorldNews = new Swiper(swiper, {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
        navigation: {
          nextEl: swiperBtnNext,
          prevEl: swiperBtnPrev,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        breakpoints: {
          991: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
              rows: 2,
            },
          },
        },
      });
    });

    const swiperDepartmentWrappers = document.querySelectorAll('.department-swiper-wrapper');
    swiperDepartmentWrappers.forEach((swiperDepartmentWrapper) => {
      const swiper = swiperDepartmentWrapper.querySelector('.department-swiper');
      const swiperBtnNext = swiperDepartmentWrapper.querySelector('.swiper-btn-next');
      const swiperBtnPrev = swiperDepartmentWrapper.querySelector('.swiper-btn-prev');

      const swiperDepartment = new Swiper(swiper, {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: swiperBtnNext,
          prevEl: swiperBtnPrev,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      });
    });
  }
  if (document.querySelector('.language')) {
    const langBtn = document.querySelector('.language__btn');

    langBtn.onclick = function () {
      langBtn.classList.toggle('language-active');
    };
  }
  if (document.querySelector('[js-tab]')) {
    const tabs = document.querySelectorAll('[js-tab]');

    tabs.forEach((tab) => {
      const tabBtns = tab.querySelectorAll('[js-tab-btn]');
      const tabItems = tab.querySelectorAll('[js-tab-item]');
      tabBtns.forEach((btn) => {
        tabClick(btn, tabBtns, tabItems);
      });
    });

    function tabClick(item, btns, items) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('js-tab-data');
        let currentTabs = document.querySelectorAll(`[js-tab-data="${tabId}"]`);

        if (!currentBtn.hasAttribute('js-tab-active')) {
          btns.forEach((item) => item.removeAttribute('js-tab-active'));
          currentBtn.setAttribute('js-tab-active', '');
          items.forEach((item) => item.removeAttribute('js-tab-active'));

          currentTabs.forEach((item) => item.setAttribute('js-tab-active', ''));
        }
      });
    }
  }
});
