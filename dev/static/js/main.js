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

var body = document.querySelector('.body');
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
var callbackSubmit = document.querySelector('.form-callback__submit');
var qReaction = document.querySelector('.form-reaction');
var qReactionCloser = document.querySelector('.form-reaction__btn');

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

if (callbackSubmit) {
    callbackSubmit.addEventListener('click', function() {
        event.preventDefault();
        callbackPopup.classList.add('hidden');
        qReaction.classList.add('active');
    });
};

if (qReactionCloser) {
    qReactionCloser.addEventListener('click', function() {
        callbackPopup.classList.remove('active');
        callbackPopup.classList.remove('hidden');
        qReaction.classList.remove('active');
    });
};

var qPopup = document.querySelector('.popup-ask');
var qOpener = document.querySelector('.js-ask');
var qCloser = document.querySelector('.popup-ask__closer');
var qSubmit = document.querySelector('.form-ask__submit');

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

if (qSubmit) {
    qSubmit.addEventListener('click', function() {
        event.preventDefault();
        qPopup.classList.add('hidden');
        qReaction.classList.add('active');
    });
};

if (qReactionCloser) {
    qReactionCloser.addEventListener('click', function() {
        qPopup.classList.remove('active');
        qPopup.classList.remove('hidden');
        qReaction.classList.remove('active');
    });
};

// Открытие смены еды
var upperItem5 = document.getElementsByClassName('js-change');
var elNodes = document.querySelectorAll(".js-change");
var changeMeal = document.querySelector('.change-meal');
var changeMealCloser = document.querySelector('.change-meal__closer');

for (var i = 0; i < upperItem5.length; i++) {
    var elem = upperItem5[i];
    elem.addEventListener("click", function() {
        event.preventDefault();
        changeMeal.classList.add("active");
        body.classList.add('no-scroll');
    });
}

if (changeMealCloser) {
    changeMealCloser.addEventListener('click', function() {
        event.preventDefault();
        changeMeal.classList.remove('active');
        body.classList.remove('no-scroll');
    });
};

var fastOrderCloser = document.querySelector('.fast-order__closer');
var fastOrder = document.querySelector('.fast-order');
var fastOrderOpener = document.querySelector('.select__order');

if (fastOrderOpener) {
    fastOrderOpener.addEventListener('click', function() {
        event.preventDefault();
        fastOrder.classList.add('active');
        body.classList.add('no-scroll');
    });
};

if (fastOrderCloser) {
    fastOrderCloser.addEventListener('click', function() {
        event.preventDefault();
        fastOrder.classList.remove('active');
        body.classList.remove('no-scroll');
    });
};


var btns = document.getElementsByClassName('select__days-btn');
var elNodes = document.querySelectorAll(".select__days-btn");
var daysFilter = document.querySelector('.s-content__filter-list');

for (var i = 0; i < btns.length; i++) {
    var elem = btns[i];

    elem.addEventListener("click", changeActiveClass);
}

function changeActiveClass(e) {
    event.preventDefault();

    for (var i = 0; i < btns.length; i++) {
        var elem = btns[i];
        elem.classList.remove('active');
        var daysData = this.getAttribute("data-value");
        daysFilter.setAttribute("data-days", daysData);
    }

    e.target.classList.add('active');
}

var consultForm = document.querySelector('.consult__form');
var consultSubmit = document.querySelector('.consult__callback');
var consultTitle = document.querySelector('.consult__title');
var consultDescription = document.querySelector('.consult__description');
var consultAfterSending = document.querySelector('.consult__reaction');

if (consultSubmit) {
    consultSubmit.addEventListener('click', function() {
        event.preventDefault();
        consultForm.classList.add('formSent');
        consultTitle.innerHTML = "Заявка успешно отправлена";
        consultDescription.innerHTML = "В скором времени мы свяжемся с Вами";
        consultAfterSending.classList.add('active');
    });
};
