var resultItem = document.getElementsByClassName('result__item');
var elNodes = document.querySelectorAll(".result__item");
var resultBody = document.querySelector('.result');
//
for (var i = 0; i < resultItem.length; i++) {
    var result = resultItem[i];
    result.addEventListener("click", function() {
        event.preventDefault();
        this.classList.toggle("active");
        resultBody.classList.toggle("no-flow");
    });
}
