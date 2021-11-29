function openFaq(evt, faqName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("faq__content-list");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("faq__filter-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(faqName).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultFilterOpen").click();

// Табы для фильтра еды
function openMeal(evt, mealName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    var filterList = document.querySelector('.s-filter__list');

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("s-content__item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("s-filter__item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(mealName).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultMealOpen").click();
filterList.classList.remove('active');
