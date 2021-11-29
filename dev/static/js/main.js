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

var upperItem = document.getElementsByClassName('faq__content-item');
var elNodes = document.querySelectorAll(".faq__content-item");
//
for (var i = 0; i < upperItem.length; i++) {
    var elem = upperItem[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        this.classList.toggle("active");
    });
}


var upperItem2 = document.getElementsByClassName('s-filter__item');
var elNodes = document.querySelectorAll(".s-filter__item");
var filterList = document.querySelector('.s-filter__list');

for (var i = 0; i < upperItem2.length; i++) {
    var elem = upperItem2[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        filterList.classList.toggle("active");
    });
}


var upperItem3 = document.getElementsByClassName('js-callback');
var elNodes = document.querySelectorAll(".js-callback");
var callbackPopup = document.querySelector(".popup-callback")

for (var i = 0; i < upperItem3.length; i++) {
    var elem = upperItem3[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        callbackPopup.classList.add("active");
    });
}

var callbackCloser = document.querySelector('.popup-callback__closer');

if (callbackCloser) {
    callbackCloser.addEventListener('click', function() {
        event.preventDefault();
        callbackPopup.classList.remove('active');
    });
};

var qPopup = document.querySelector('.popup-ask');
var qOpener = document.querySelector('.js-ask');
var qCloser = document.querySelector('.popup-ask__closer');

if (qOpener) {
    qOpener.addEventListener('click', function() {
        event.preventDefault();
        qPopup.classList.add('active');
    });
};

if (qCloser) {
    qCloser.addEventListener('click', function() {
        event.preventDefault();
        qPopup.classList.remove('active');
    });
};
