import { AccentTypographyBuild } from "./accent-typography";
import { sectionObserver } from "./section-observer";
import { disableScroll } from "./disable-scroll";
import { preloaderHide } from "./preloader";

document.addEventListener("DOMContentLoaded", () => {
  disableScroll();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!prefersReducedMotion.matches) {
    const animationTopScreenTextLine = new AccentTypographyBuild(`.hero__title`, 500, `active`, `transform`);
    sectionObserver();
  }
});

window.addEventListener("load", () => {
  preloaderHide();
});
