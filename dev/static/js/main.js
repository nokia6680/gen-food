// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var menuOpener = document.querySelector('.nav__toggle');
var menu = document.querySelector('.nav__list');

if (menuOpener) {
    menuOpener.addEventListener('click', function() {
        event.preventDefault();
        menuOpener.classList.toggle('opened');
        menu.classList.toggle('opened');
    });
};
