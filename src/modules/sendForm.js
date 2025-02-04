/* eslint-disable space-before-function-paren */
export const sendForm = ({ formId, animationId, someElement = [] }) => {
  const form = document.getElementById(formId);
  const animationElement = document.getElementById(animationId);
  const statusBlock = document.createElement('div');

  const errorText = 'Ошибка!';
  const successText = 'Спасибо! Наш менеджер свяжется с вами!';

  const sendData = async (data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return await response.json();
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    animationElement.style.display = 'block';
    statusBlock.style.display = 'none';

    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElement.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === 'block') {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input') {
        formBody[elem.id] = element.value;
      }
    });

    sendData(formBody)
      .then(() => {
        animationElement.style.display = 'none';
        statusBlock.style.display = 'block';
        statusBlock.textContent = successText;

        formElements.forEach((element) => {
          element.value = '';
        });
      })
      .catch(() => {
        animationElement.style.display = 'none';
        statusBlock.textContent = errorText;
      });
  };

  try {
    if (!form) {
      throw new Error('Такой формы нет!');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
