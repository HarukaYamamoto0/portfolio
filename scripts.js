// Seleção de elementos DOM
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const myAgeSpan = document.querySelector("#my-age");
const list = document.querySelector("#latest-projects");

const currentYear = new Date().getFullYear();
myAgeSpan.textContent = `~${currentYear - 2005} years`;

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

async function loadRepos() {
  /*
  try {
    const response = await fetch('data.json');
    const repos = await response.json();

    repos.forEach(repo => {
        const item = document.createElement('li');
        const itemName = document.createElement("mark");
        const itemCommits = document.createElement("small");
        
        itemName.textContent = repo.name;
        itemCommits.textContent = repo.commitCount;
        itemCommits.classList.add('accent');
        
        item.appendChild(itemName);
        item.appendChild(itemCommits);
        list.appendChild(item);
    });
  } catch (error) {
    console.error('There was an error fetching the repos', error);
  }
  */
}

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

window.onload = loadRepos;

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  alert("This portfolio has not yet been adapted for computers, only for cell phones.");
}
