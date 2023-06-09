const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const navSkipLayer = document.getElementById("nav-skip-layer");
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.getElementById("text-box");
const images = document.getElementsByTagName("img");
const yearsOfExperience = new Date().getFullYear() - 2010;

function showNav() {
  nav.classList.remove("hidden");
  nav.classList.add("visible-flex");
  navSkipLayer.classList.remove("hidden");
  navSkipLayer.classList.add("visible-flex");
}

function hideNav() {
  console.log("cliquei");
  nav.classList.remove("visible-flex");
  nav.classList.add("hidden");
  navSkipLayer.classList.add("hidden");
  navSkipLayer.classList.remove("visible-flex");
}

function calculateExperience() {
  console.log("yearsOfExperience", yearsOfExperience);
  document.getElementById("years-of-experience").innerHTML = yearsOfExperience;
}
calculateExperience();

function changeThemeOfImages() {
  for (const image of images) {
    if (toggleSwitch.checked) {
      image.src = image.src.replace("_light", "_dark");
    } else {
      image.src = image.src.replace("_dark", "_light");
    }
  }
}

function darkMode() {
  toggleSwitch.checked = true;
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  changeThemeOfImages(images);
}

function lightMode() {
  toggleSwitch.checked = false;
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
  nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  changeThemeOfImages();
}

function switchTheme(event) {
  if (event.target.checked) {
    darkMode();
  } else {
    lightMode();
  }
}

toggleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    darkMode();
  } else {
    lightMode();
  }
} else {
  darkMode();
}
