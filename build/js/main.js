const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button');
  const mainMenu = document.getElementById('main-menu');
  const toggleMenu = () => {
    mainMenu.classList.toggle('hidden');
    mainMenu.classList.toggle('flex');
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  mainMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp)
// console.log("Hello")