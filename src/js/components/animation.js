import { AccentTypographyBuild } from "./accent-typography";
import { sectionObserver } from "./section-observer";

const preloaderHide = () => {
  const body = document.body;
  const preloader = document.querySelector('.preloader');

  if (preloader) {
    preloader.classList.add('preloader-animation');

    setTimeout(() => {
      preloader.classList.remove('preloader-animation');
      preloader.classList.add('preloader-none');
      body.classList.add('page-visible');
    }, 2500);

    setTimeout(() => {
      body.classList.remove('dis-scroll');
    }, 3200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const animationTopScreenTextLine = new AccentTypographyBuild(`.hero__title`, 500, `active`, `transform`);
  sectionObserver();
});

window.addEventListener("load", () => {
  preloaderHide();
});
