export const inputValidation = () => {
  const numberInputs = document.querySelectorAll('[type="number"]');
  const textInputs = document.querySelectorAll('[type="text"]');
  const emailInputs = document.querySelectorAll('[type="email"]');
  const telInputs = document.querySelectorAll('[type="tel"]');

  numberInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^0-9]/g, '');
    });
  });

  textInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^а-яА-ЯёЁ\s-]/g, '');
    });

    input.addEventListener('blur', () => {
      input.value = input.value
        .replace(/\s{2,}/g, ' ')
        .replace(/-+/g, '-')
        .trim();
    });
  });

  emailInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^a-zA-Z0-9@._\-!~*']/g, '');
    });

    input.addEventListener('blur', () => {
      input.value = input.value.replace(/-+/g, '-').trim();
    });
  });

  telInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^0-9()\-\s]/g, '');
    });

    input.addEventListener('blur', () => {
      input.value = input.value
        .replace(/\s{2,}/g, ' ')
        .replace(/-+/g, '-')
        .trim();
    });
  });
};
