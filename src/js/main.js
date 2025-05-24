import { burger } from './modules/_burger.js';
import { swipers } from './modules/_swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  burger();
  swipers();
  if (document.querySelector('.language')) {
    const langBtn = document.querySelector('.language__btn');

    langBtn.onclick = function () {
      langBtn.classList.toggle('language-active');
    };
  }
});
