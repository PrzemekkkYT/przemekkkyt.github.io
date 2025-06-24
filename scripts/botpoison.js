var formElement = document.querySelector("#contact-form");
var buttonElement = document.querySelector("#submit-button");
var boxLoader = document.querySelector("#loader-box");
formElement.addEventListener("botpoison-challenge-start", function () {
  buttonElement.setAttribute("disabled", "disabled");
  boxLoader.classList.remove("hidden");
});
formElement.addEventListener("botpoison-challenge-success", function () {
  buttonElement.removeAttribute("disabled");
  boxLoader.classList.add("hidden");
});
formElement.addEventListener("botpoison-challenge-error", function () {
  buttonElement.removeAttribute("disabled");
});
