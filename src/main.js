const blocksNumber = document.querySelectorAll('.block-number');
const arrowsLeft = document.querySelectorAll('.arrow.left img');
const arrowsRight = document.querySelectorAll('.arrow.right img');
const arrowsTop = document.querySelectorAll('.arrow.top img');
const arrowsBottom = document.querySelectorAll('.arrow.bottom img');

document.addEventListener('click', (e) => {
  if (e.target.closest('.arrow.left img')) {
    arrowsLeft.forEach((arrow, index) => {
      if (e.target.closest('.arrow.left img') === arrow) {
        if (blocksNumber[index - 1]) {
          const currentText = blocksNumber[index].textContent;
          const nextText = blocksNumber[index - 1].textContent;

          blocksNumber[index - 1].textContent = currentText;
          blocksNumber[index].textContent = nextText;
        }
      }
    });
  } else if (e.target.closest('.arrow.right img')) {
    arrowsRight.forEach((arrow, index) => {
      if (e.target.closest('.arrow.right img') === arrow) {
        if (blocksNumber[index + 1]) {
          const currentText = blocksNumber[index].textContent;
          const nextText = blocksNumber[index + 1].textContent;

          blocksNumber[index + 1].textContent = currentText;
          blocksNumber[index].textContent = nextText;
        }
      }
    });
  } else if (e.target.closest('.arrow.top img')) {
    arrowsTop.forEach((arrow, index) => {
      if (e.target.closest('.arrow.top img') === arrow) {
        if (blocksNumber[index - 5]) {
          const currentText = blocksNumber[index].textContent;
          const nextText = blocksNumber[index - 5].textContent;

          blocksNumber[index - 5].textContent = currentText;
          blocksNumber[index].textContent = nextText;
        }
      }
    });
  } else if (e.target.closest('.arrow.bottom img')) {
    arrowsBottom.forEach((arrow, index) => {
      if (e.target.closest('.arrow.bottom img') === arrow) {
        if (blocksNumber[index + 5]) {
          const currentText = blocksNumber[index].textContent;
          const nextText = blocksNumber[index + 5].textContent;

          blocksNumber[index + 5].textContent = currentText;
          blocksNumber[index].textContent = nextText;
        }
      }
    });
  } else if (e.target.closest('.btn-reset')) {
    blocksNumber.forEach((block, index) => {
      block.textContent = index + 1;
    });
  }
});
