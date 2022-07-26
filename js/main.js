// navbar
let barToggler = document.querySelector(".navbar-toggler .bar");
let closeToggler = document.querySelector(".navbar-toggler .close");
let mobileNavbar = document.querySelector(".mobileNavbar");
let ulMobNav = document.querySelector(".mobileNavbar ul");

barToggler.onclick = function () {
  barToggler.style.display = "none";
  closeToggler.classList.remove("d-none");
  closeToggler.classList.add("d-block");
  mobileNavbar.style.display = "block";
  setTimeout(function () {
    ulMobNav.style.transform = "translate(-50%, 45%)";
  }, 100);
};
closeToggler.onclick = function () {
  barToggler.style.display = "block";
  closeToggler.classList.remove("d-block");
  closeToggler.classList.add("d-none");
  setTimeout(function () {
    ulMobNav.style.transform = "translate(-50%, -100%)";
  }, 100);
  setTimeout(function () {
    mobileNavbar.style.display = "none";
  }, 400);
};
// card slider
let point = document.querySelectorAll(".point");
let card = document.querySelectorAll(".mobileCards .cards");
let cardOne = document.querySelector(".one");
let cardTwo = document.querySelector(".two");
let cardThree = document.querySelector(".three");
let cardFour = document.querySelector(".four");

point.forEach(function (el) {
  el.onclick = function () {
    point.forEach(function (el) {
      el.classList.remove("activePoint");
    });
    el.classList.add("activePoint");
    card.forEach(function (ele) {
      ele.classList.remove("done");
      ele.style.transform = null;
    });
    document.querySelector(`${el.dataset.num}`).classList.add("done");
    if (cardOne.classList.contains("done")) {
      cardOne.style.transform = "translateX(0%)";
      cardTwo.style.transform = "translateX(100%)";
    } else if (cardTwo.classList.contains("done")) {
      cardOne.style.transform = "translateX(-200%)";
      cardTwo.style.transform = "translateX(-100%)";
    } else if (cardThree.classList.contains("done")) {
      cardOne.style.transform = "translateX(-400%)";
      cardTwo.style.transform = "translateX(-300%)";
      cardThree.style.transform = "translateX(-200%)";
    } else if (cardFour.classList.contains("done")) {
      cardOne.style.transform = "translateX(-600%)";
      cardTwo.style.transform = "translateX(-500%)";
      cardThree.style.transform = "translateX(-400%)";
      cardFour.style.transform = "translateX(-300%)";
    }
  };
});
