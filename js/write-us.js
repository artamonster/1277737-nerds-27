var link = document.querySelector(".red-contacts-button");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".write-us-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("write-us-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
    }
  }
});
