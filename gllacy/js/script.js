var show = document.querySelector(".address-link");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
show.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
