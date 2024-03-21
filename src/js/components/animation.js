import { disableScroll } from "./disable-scroll";
import { enableScroll } from "./enable-scroll";
import { AccentTypographyBuild } from "./accent-typography";
import { sectionObserver } from "./section-observer";

const animationTopScreenTextLine = new AccentTypographyBuild(`.hero__title`, 500, `active`, `transform`);

const preloaderInit = () => {
  disableScroll();
  const preloader = document.querySelector('.preloader')
  preloader.classList.add('preloader-animation');
  
  setTimeout(() => {
    preloader.classList.remove('preloader-animation');
    preloader.classList.add('preloader-none');
    animationTopScreenTextLine.runAnimation();
    enableScroll();
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  preloaderInit();
  sectionObserver();
});
