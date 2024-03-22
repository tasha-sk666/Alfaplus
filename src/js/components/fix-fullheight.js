import { throttle } from './throttle';

const fixFullheight = () => {
  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

let fixHeight = throttle(fixFullheight);

mobileCheck();
fixHeight();

window.addEventListener('resize', fixHeight);
