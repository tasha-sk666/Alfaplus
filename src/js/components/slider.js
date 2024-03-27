import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar]);
import { isMobile } from './check-viewport';
import fslightbox from 'fslightbox';

const projectSliderInit = () => {
  const projectSlider = document.querySelector(".projects__slider");

  if (projectSlider){
    const projectCard = projectSlider.querySelectorAll('.project-card');

    projectCard.forEach((card) => {
      const cardImgSrc = card.querySelector('img').src;
      const galleryLink = `<a data-fslightbox="project-gallery" href="${cardImgSrc}"></a>`;
      card.insertAdjacentHTML('beforeend', galleryLink);
      refreshFsLightbox();
    });

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
  }
}

const benefitsSliderInit = () => {
  const benefitsSliderItem = document.querySelector(".benefits__swiper");

  if (benefitsSliderItem) {
    let benefitsSlider;

    if (isMobile()) {
      benefitsSlider = new Swiper(benefitsSliderItem, {
        slidesPerView: 'auto',
        spaceBetween: 30,
      });
    } else {
      if (benefitsSlider) {
        benefitsSlider.destroy();
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  projectSliderInit();
  benefitsSliderInit();
});

window.addEventListener("resize", () => {
  benefitsSliderInit();
});
