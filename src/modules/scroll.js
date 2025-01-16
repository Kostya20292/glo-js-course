export const scroll = () => {
  const scrollBtn = document.querySelector('main > a');
  const scrollElement = document.getElementById(scrollBtn.hash.slice(1));

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();

    scrollElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
};
