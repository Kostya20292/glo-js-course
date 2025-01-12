const square = document.querySelector('.square');

let count = 0;

const animate = () => {
  const animation = requestAnimationFrame(animate);

  square.style.transform = `rotate(${count}deg)`;
  count++;

  if (count === 360) {
    cancelAnimationFrame(animation);
  }
};

animate();
