import JustValidate from 'just-validate';
import Inputmask from "inputmask";

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask('+7 (999) 999-99-99');
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError
        });
      }
    }
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    let formData = new FormData(ev.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend(200);
          }
        } else {
          afterSend();
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    ev.target.reset();
  })
};

const rules = (parentSelector) => {
  return [
    {
      ruleSelector: `${parentSelector} input[type="tel"]`,
      tel: true,
      telError: 'Введите корректный телефон',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните телефон!'
        }
      ]
    },
  ];
}

const afterForm = (status) => {
  let messageStroke;

  if (status === 200) {
    console.log('Произошла отправка');

    messageStroke = `
    <div class="form-message form-message--success">
    <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
      <p>Ваша заявка отправлена. Скоро с Вами свяжемся</p>
    </div>
    `;
  } else {
    messageStroke = `
    <div class="form-message form-message--error">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
      </svg>
      <p>Что-то пошло не так. Попробуйте еще раз.</p>
    </div>
     `;
  }

  document.body.insertAdjacentHTML('beforeend', messageStroke);
  const message = document.querySelector('.form-message');

  setTimeout(() => {
    message.classList.add('active');
  }, 500);

  setTimeout(() => {
    message.classList.remove('active');
  }, 3500);

  setTimeout(() => {
    message.remove();
  }, 4000);
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.modal-form')) {
    validateForms('.modal-form', rules('.modal-form'), afterForm);
  }

  if (document.querySelector('.request__form')) {
    validateForms('.request__form', rules('.request__form'), afterForm);
  }

  if (document.querySelector('.contact__form')) {
    validateForms('.contact__form', rules('.contact__form'), afterForm);
  }
});

