import { disableScroll } from './disable-scroll';
import { enableScroll } from './enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const nav = document?.querySelector('[data-nav]');
  const navItems = document?.querySelectorAll('[data-nav-item]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--active');

    if (nav?.classList.contains('nav--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      enableScroll();
    }
  });

  navItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--active');
      enableScroll();
    });
  });
})();
