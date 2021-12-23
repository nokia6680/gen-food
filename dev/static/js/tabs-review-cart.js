
// Табы для фильтра еды
function changeTabCart(evt, cartName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    var filterList = document.querySelector('.cart__filter-list');

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("cart__content-item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("cart__filter-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    var breakpoint = window.matchMedia('(min-width: 768px)');
    var breakpointChecker = function() {
        // if larger viewport
        if (breakpoint.matches === true) {
            document.getElementById(cartName).style.display = "grid";
            evt.currentTarget.className += " active";
            // else if a small viewport
        } else {
            // fire small viewport
            document.getElementById(cartName).style.display = "flex";
            evt.currentTarget.className += " active";
        }
    };

    // keep an eye on viewport size changes
    breakpoint.addListener(breakpointChecker);
    // kickstart
    breakpointChecker();
}

document.getElementById("defaultFilterOpen").click();


var stepFirstBtn = document.querySelector('.js-step-first');
var stepSecondTab = document.querySelector('.step-2');
var stepSecondBtn = document.querySelector('.js-step-second');
var stepThirdTab = document.querySelector('.step-3');
var stepThirdBtn = document.querySelector('.js-step-three');
var stepFourthTab = document.querySelector('.step-4');

var cartFirstTab = document.querySelector('.cart-tab-1');
var cartSecondTab = document.querySelector('.cart-tab-2');
var cartThirdTab = document.querySelector('.cart-tab-3');
var cartFourthTab = document.querySelector('.cart-tab-4');

var secondTabWidth = stepSecondTab.offsetWidth;
var thirdTabWidth = stepThirdTab.offsetWidth;
var scrollSnapContainer = document.querySelector('.cart__filter-list');

console.log(secondTabWidth + 40);

if (stepFirstBtn) {
    stepFirstBtn.addEventListener('click', function() {
        event.preventDefault();
        stepSecondTab.classList.remove('inactive');
        stepSecondTab.click();
        window.scrollTo(pageXOffset, 0);

        cartFirstTab.classList.add('right');
        cartSecondTab.classList.add('left');
    });
};

if (stepSecondBtn) {
    stepSecondBtn.addEventListener('click', function() {
        event.preventDefault();
        stepThirdTab.classList.remove('inactive');
        stepThirdTab.click();
        window.scrollTo(pageXOffset, 0);

        cartFirstTab.classList.add('right2');
    });
};

if (stepThirdBtn) {
    stepThirdBtn.addEventListener('click', function() {
        event.preventDefault();
        stepFourthTab.classList.remove('inactive');
        stepFourthTab.click();
        window.scrollTo(pageXOffset, 0);

        cartFirstTab.classList.add('right3');
    });
};
