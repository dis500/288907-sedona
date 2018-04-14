var failurPopup = document.querySelector(".failur-popup");
var successPopup = document.querySelector(".success-popup");
var failurPopupBtn = failurPopup.querySelector(".failur-popup__btn");
var successPopupBtn = successPopup.querySelector(".success-popup__btn");
var form = document.querySelector("form");
var name = form.querySelector("[name=name]");
var lastName = form.querySelector("[name=last-name]");
var number = form.querySelector("[name=number]");
var email = form.querySelector("[name=email]");

form.addEventListener("submit", function (evt) {
  if (name.value == "" || lastName.value == "" || number.value == "" || email.value == "") {
    evt.preventDefault();
    failurPopup.classList.add("popup--show");
    console.log("Заполнить форму");
  } else {
    evt.preventDefault();
    successPopup.classList.add("popup--show");
    console.log("Форма отправлена");
  }
});

successPopupBtn.addEventListener("click", function(event) {
    event.preventDefault();
    successPopup.classList.remove("popup--show");
});

failurPopupBtn.addEventListener("click", function(event) {
    event.preventDefault();
    failurPopup.classList.remove("popup--show");
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (failurPopup.classList.contains("popup--show")) {
      failurPopup.classList.remove("popup--show");
    }
  }
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (successPopup.classList.contains("popup--show")) {
      successPopup.classList.remove("popup--show");
    }
  }
});
