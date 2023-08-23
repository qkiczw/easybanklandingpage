// Aos animation library
AOS.init({
	startEvent: 'DOMContentLoaded',
	offset: 200,
	once: true,
});


const Btn = document.querySelector('.nav__bar');
const closeBtn = document.querySelector('.nav__closebar');
const navList = document.querySelector('.nav__list');

function showMenu() {
	navList.classList.toggle('nav__show');
	if (navList.classList.contains('nav__show')) {
        Btn.style.display = 'none';
        closeBtn.style.display = 'block';
    }
    else {
        closeBtn.style.display = 'none';
         Btn.style.display = 'block';
	}
}

Btn.addEventListener('click', showMenu);
