const librarySlider = document.querySelector(".lb-heading");
const libraryList = document.querySelector(".lb-list");
const libraryItems = document.querySelectorAll(".lb-item");

librarySlider.addEventListener("click", slide);

function slide() {
  librarySlider.classList.add("leave");
  libraryList.classList.add("enter");
  libraryItems.forEach(item => item.classList.add("enter"));
}
