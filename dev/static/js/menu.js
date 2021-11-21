var yourNavigation = $(".nav__list");
var stickyDiv = "sticky";
var yourHeader = $('.intro').height();

$(window).scroll(function() {
    if ($(this).scrollTop() > yourHeader) {
        yourNavigation.addClass(stickyDiv);
    }

    else {
        yourNavigation.removeClass(stickyDiv);
    }
});
