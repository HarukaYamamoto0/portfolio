const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const myAgeSpan = document.querySelector("#my-age");

myAgeSpan.textContent = `${calculateAge()} years`;

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function calculateAge() {
  const birthDate = new Date("2005-12-01T23:00:00");
  const currentDate = new Date();

  const differenceInMilliseconds = currentDate - birthDate;
  const ageInYears = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  return Math.floor(ageInYears);
}
