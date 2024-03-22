import { throttle } from './throttle';
import { mobileCheck } from './mobile-check';

const fixFullheight = () => {
  let vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

let fixHeight = throttle(fixFullheight);

mobileCheck();
fixHeight();

window.addEventListener('resize', fixHeight);
