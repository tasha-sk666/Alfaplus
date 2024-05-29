import { enableScroll } from "./enable-scroll";

export const preloaderHide = () => {
  const preloader = document.querySelector('.preloader');

  if (preloader) {
    preloader.classList.add('preloader-animation');

    setTimeout(() => {
      preloader.classList.remove('preloader-animation');
      preloader.classList.add('preloader-none');
      enableScroll();
    }, 2500);

    setTimeout(() => {
      document.body.classList.add('page-visible');
    }, 3200);
  }
}
