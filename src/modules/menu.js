export const menu = () => {
  const menuElement = document.querySelector('menu');
  const menuBtn = document.querySelector('.menu');
  const closeBtn = menuElement.querySelector('.close-btn');
  const menuItems = menuElement.querySelectorAll('ul>li>a');
  const scrollBtn = document.querySelector('main > a');
  const scrollElement = document.getElementById(scrollBtn.hash.slice(1));

  const handleMenu = () => menuElement.classList.toggle('active-menu');

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);

  menuItems.forEach((menuItem) =>
    menuItem.addEventListener('click', (e) => {
      const clickedElement = document.getElementById(menuItem.hash.slice(1));

      clickedElement.scrollIntoView({ block: 'start', behavior: 'smooth' });

      e.preventDefault();
      handleMenu();
    })
  );

  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();

    scrollElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
};
