function validationTel() {
    let tel = document.getElementById('tel-callback').value;
    let patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;
    let callbackForm = document.getElementById("callbackForm");

    if (tel.match(patternTel)) {
        callbackForm.classList.remove('active');
    } else {
        callbackForm.classList.add('wrong');
    }

    if (tel == '+') {
        textTel.innerHTML = "";
    }

    if (tel == '+7 (') {
        textTel.innerHTML = "";
    }
};
