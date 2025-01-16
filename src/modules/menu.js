export const menu = () => {
  const menuElement = document.querySelector('menu');

  const handleMenu = (e) => {
    if (e.target.closest('.menu')) {
      menuElement.classList.add('active-menu');
    } else if (e.target.classList.contains('close-btn') || !e.target.closest('menu')) {
      menuElement.classList.remove('active-menu');
    } else if (e.target.closest('menu > ul > li > a')) {
      const clickedElement = document.getElementById(
        e.target.closest('menu > ul > li > a').getAttribute('href').slice(1)
      );

      e.preventDefault();

      clickedElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
      menuElement.classList.remove('active-menu');
    }
  };

  document.addEventListener('click', handleMenu);
};
