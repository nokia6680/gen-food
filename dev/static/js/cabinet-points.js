var pointItem = document.getElementsByClassName('point__item');
var elNodes = document.querySelectorAll(".point__item");
var pointBody = document.querySelector('.point');
//
for (var i = 0; i < pointItem.length; i++) {
    var point = pointItem[i];
    point.addEventListener("click", function() {
        event.preventDefault();
        this.classList.toggle("active");
        pointBody.classList.toggle("no-flow");
    });
}
