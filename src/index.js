import "./style.css";
import home from "./homepage";
import menu from "./menu";
import location from "./location"
import { navBar } from "./nav";

function makePage() {
  navBar();
  home.makeHome();

  addEvents();
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
  addEvents();
}
//When user clicks menu tab
function menuClick() {
  clearScreen();
  navBar();
  menu.makeMenu();
  addEvents();
}
//when user clicks location tab
function locationClick() {
  clearScreen();
  navBar();
  location.showLocation();
  addEvents();
}
export function addEvents() {
  const homeNav = document.querySelector("#home");
  const menuNav = document.querySelector("#menu");
  const locationNav = document.querySelector("#location");
  
  homeNav.addEventListener("click", homeClick);
  menuNav.addEventListener("click", menuClick);
  locationNav.addEventListener("click", locationClick);
}
makePage();
