import { toggleNav } from "../utils/navigations.js";
import { closeNav } from "../utils/navigations.js";
import "../utils/analytics.js";
const navs = document.getElementById("navLinks");
const hamburgerBtn = document.getElementById("hamburger");

hamburgerBtn.addEventListener("click", () => {
  toggleNav(navs, hamburgerBtn);
});

navs.addEventListener("click", (e) => {
  if (e.target) {
    closeNav(navs, hamburgerBtn);
  }
});
