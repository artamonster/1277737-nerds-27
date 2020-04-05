//var можно заменить на const.
var link = document.querySelector(".red-contacts-button");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".write-us-close");

//  add и remove можно попробовать заменить на toggle  в одном event
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("write-us-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("write-us-show");
});

//  можно совместить if в два условия

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("write-us-show")) {
      popup.classList.remove("write-us-show");
    }
  }
});
