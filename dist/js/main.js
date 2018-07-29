//Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuItems = document.querySelectorAll(".nav-item");

const about = document.querySelector(".about");
const aboutList = document.querySelector(".about-list");
const aboutItems = document.querySelectorAll(".about-item");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const program = document.querySelector(".program");
const programList = document.querySelector(".program-list");
const programItems = document.querySelectorAll(".program-item");
const programTable = document.querySelector(".table");

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuItems.forEach(item => item.classList.add("show"));
    //Show Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuItems.forEach(item => item.classList.remove("show"));
    //Show Menu State
    showMenu = false;
  }
}
//About Us

function openAbout() {
  var heading = document.getElementById("big-heading");
  heading.style.display = "none";
  about.classList.add("show");
  aboutList.classList.add("show");
  aboutItems.forEach(item => item.classList.add("show"));
  arrowLeft.classList.add("show");
  arrowRight.classList.add("show");
}

function openProgram() {
  var heading = document.getElementById("pg-heading");
  heading.style.display = "none";
  programTable.classList.add("show");
  program.classList.add("show");
  programList.classList.add("show");
  programItems.forEach(item => item.classList.add("show"));
  arrowLeft.classList.add("show");
  arrowRight.classList.add("show");
}

let sliderLists = document.querySelectorAll(".slide"),
  current = 0;

function reset() {
  for (let i = 0; i < sliderLists.length; i++) {
    sliderLists[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  sliderLists[current].style.display = "inherit";
}

function slideLeft() {
  reset();
  sliderLists[current - 1].style.display = "inherit";
  current--;
}

function slideRight() {
  reset();
  sliderLists[current + 1].style.display = "inherit";
  current++;
}

arrowLeft.addEventListener("click", function() {
  if (current == 0) {
    current = sliderLists.length;
  }
  slideLeft();
});

arrowRight.addEventListener("click", function() {
  if (current == sliderLists.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
