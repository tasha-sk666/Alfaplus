import { disableScroll } from "./disable-scroll";
import { enableScroll } from "./enable-scroll";
import { AccentTypographyBuild } from "./accent-typography";
import { sectionObserver } from "./section-observer";

const preloaderHide = () => {
  disableScroll();
  const body = document.body;
  const preloader = document.querySelector('.preloader')
  preloader.classList.add('preloader-animation');

  setTimeout(() => {
    preloader.classList.remove('preloader-animation');
    preloader.classList.add('preloader-none');
    body.classList.add('page-visible');
    enableScroll();
  }, 3000);
}


document.addEventListener("DOMContentLoaded", () => {
  const animationTopScreenTextLine = new AccentTypographyBuild(`.hero__title`, 500, `active`, `transform`);
  sectionObserver();
});

window.addEventListener("load", () => {
  preloaderHide();
});
