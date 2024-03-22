export class AccentTypographyBuild {
  constructor(
    elementSelector,
    timer,
    classForActivate,
    property
  ) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this.prePareText();
  }

  createElement(word, index) {
    const span = document.createElement(`span`);

    if (index === 2) {
      span.classList.add('color-accent');
    }

    span.textContent = word;
    span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;
    this._timeOffset += 150;
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((latter)=>latter !== '');

    const content = text.reduce((fragmentParent, word, index) => {
      const wordElement = this.createElement(word, index);
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`accent-typography__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
