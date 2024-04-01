import Swiper, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, A11y]);
import fslightbox from 'fslightbox';

const projectSliderInit = () => {
  const projectSlider = document.querySelector(".projects__slider");

  if (projectSlider) {
    const projectCard = projectSlider.querySelectorAll('.project-card');

    projectCard.forEach((card) => {
      const cardImgSrc = card.querySelector('img').src;
      const galleryLink = `<a data-fslightbox="project-gallery" href="${cardImgSrc}"></a>`;
      card.insertAdjacentHTML('beforeend', galleryLink);
      refreshFsLightbox();
    });

    const swiper = new Swiper(projectSlider, {
      spaceBetween: 30,
      scrollbar: {
        el: '.projects__scrollbar',
        draggable: true,
        dragSize: '200px'
      },
      navigation: {
        nextEl: '.projects__btn-next',
        prevEl: '.projects__btn-prev',
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

document.addEventListener("DOMContentLoaded", () => {
  projectSliderInit();
});
