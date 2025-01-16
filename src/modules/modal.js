export const modal = () => {
  const popup = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  let animationOpenId;
  let animationCloseId;
  let count = 0;

  const popupAnimateOpen = () => {
    popup.style.display = 'block';
    popup.style.opacity = count;
    count = +(count + 0.05).toFixed(2);

    animationOpenId = requestAnimationFrame(popupAnimateOpen);

    if (count > 1) {
      cancelAnimationFrame(animationOpenId);
    }
  };

  const popupAnimateClose = () => {
    popup.style.opacity = count;
    count = +(count - 0.05).toFixed(2);

    animationCloseId = requestAnimationFrame(popupAnimateClose);

    if (count < 0) {
      popup.style.display = 'none';
      cancelAnimationFrame(animationCloseId);
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (document.documentElement.clientWidth >= 768) {
        count = 0;
        popupAnimateOpen();
      } else {
        popup.style.display = 'block';
        popup.style.opacity = 1;
      }
    });
  });

  popup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      if (document.documentElement.clientWidth >= 768) {
        popupAnimateClose();
      } else {
        popup.style.display = 'none';
        popup.style.opacity = 0;
      }
    }
  });
};
