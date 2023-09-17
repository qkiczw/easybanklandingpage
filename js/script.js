// Aos animation library
AOS.init({
	startEvent: 'DOMContentLoaded',
	offset: 200,
	once: true,
});

// navigation - menu bar
const openMenuButton = document.querySelector('.nav__bar');
const closeMenuButton = document.querySelector('.nav__closebar');
const menuElement = document.querySelector('.nav__list');
const imgOpacity = document.querySelector('.header__mockup__img');

openMenuButton.addEventListener('click', () => {
	menuElement.classList.add('nav__active');
	openMenuButton.classList.add('nav__close');
	closeMenuButton.classList.add('nav__show');
	imgOpacity.classList.add('header__mockup__img--opacity');
});

closeMenuButton.addEventListener('click', () => {
	menuElement.classList.remove('nav__active');
	openMenuButton.classList.remove('nav__close');
	closeMenuButton.classList.remove('nav__show');
	imgOpacity.classList.remove('header__mockup__img--opacity');
});
