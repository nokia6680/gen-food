
// Табы для фильтра еды
function openCard(evt, cardName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    var filterList = document.querySelector('.itemcard__tabs');

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("itemcard__content-item");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("itemcard__tabs-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cardName).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultTab").click();
