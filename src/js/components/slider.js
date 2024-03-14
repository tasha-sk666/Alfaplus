import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);
import { isMobile } from './check-viewport';

const projectSlider = document.querySelector(".projects__slider")
const swiper = new Swiper(projectSlider, {
  slidesPerView: 3,
  spaceBetween: 30,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.projects__btn-next',
    prevEl: '.projects__btn-prev',
  },
  scrollbar: {
    el: '.projects__scrollbar',
    draggable: true,
    dragSize: '200px'
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },
  breakpoints: {
    1025: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  }
});

function initBenefitsSlider() {
  let benefitsSlider;

  if (isMobile()) {
    benefitsSlider = new Swiper('.benefits__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
    });
  } else {
    if (benefitsSlider) {
      benefitsSlider.destroy();
    }
  }
}

function initInfoSlider() {
  let infoSlider;

  if (isMobile()) {
    infoSlider = new Swiper('.info__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
    });
  } else {
    if (infoSlider) {
      infoSlider.destroy();
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initBenefitsSlider();
  initInfoSlider();
});

window.addEventListener("resize", () => {
  initBenefitsSlider();
  initInfoSlider();
});
