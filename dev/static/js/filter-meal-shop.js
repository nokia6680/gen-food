filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("shop__content-item");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        filterRemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) filterAddClass(x[i], "show");
    }
}

function filterAddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function filterRemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

const btnContainer = document.querySelector('.shop__filter-list')

btnContainer.addEventListener('click', function(e) {
	const items = document.querySelectorAll('.filter-sort')
	const target = e.target
  Array.from(items).forEach(item => {
  	item.classList.remove('checked')
  })
  target.classList.add('checked')
})
