export const menu = () => {
  const menuElement = document.querySelector('menu');
  const menuBtn = document.querySelector('.menu');
  const closeBtn = menuElement.querySelector('.close-btn');
  const menuItems = menuElement.querySelectorAll('ul>li>a');

  const handleMenu = () => menuElement.classList.toggle('active-menu');

  menuBtn.addEventListener('click', handleMenu);
  closeBtn.addEventListener('click', handleMenu);

  menuItems.forEach((menuItem) => menuItem.addEventListener('click', handleMenu));
};
