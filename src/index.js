import "./style.css";
import home from "./homepage";
import { navBar } from "./nav";
import menu from "./menu";

function makePage() {
  navBar();
  home.makeHome();

  const homeNav = document.querySelector("#home");
  const menuNav = document.querySelector("#menu");
  const locationNav = document.querySelector("#location");

  homeNav.addEventListener("click", homeClick);
  menuNav.addEventListener("click", menuClick);
  locationNav.addEventListener("click", locationClick);
}

function clearScreen() {
  const screen = document.querySelector("#content");
  screen.textContent = " ";
}
// Function for when the user clicks on the home tab
function homeClick() {
  clearScreen();
  navBar();
  home.makeHome();
  
  const homeNav = document.querySelector("#home");
  const menuNav = document.querySelector("#menu");
  const locationNav = document.querySelector("#location");

  homeNav.addEventListener("click", homeClick);
  menuNav.addEventListener("click", menuClick);
  locationNav.addEventListener("click", locationClick);
}
//When user clicks menu tab
function menuClick() {
    clearScreen();
    navBar();
    
    const homeNav = document.querySelector("#home");
    const menuNav = document.querySelector("#menu");
    const locationNav = document.querySelector("#location");
  
    homeNav.addEventListener("click", homeClick);
    menuNav.addEventListener("click", menuClick);
    locationNav.addEventListener("click", locationClick);
}
//when user clicks location tab
function locationClick() {
  clearScreen();
  navBar();
  const homeNav = document.querySelector("#home");
  const menuNav = document.querySelector("#menu");
  const locationNav = document.querySelector("#location");

  homeNav.addEventListener("click", homeClick);
  menuNav.addEventListener("click", menuClick);
  locationNav.addEventListener("click", locationClick);
}

makePage();
