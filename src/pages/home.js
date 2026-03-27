import { toggleNav } from "../utils/navigations.js";
import { closeNav } from "../utils/navigations.js";
const navs = document.getElementById("navLinks");
const hamburgerBtn = document.getElementById("hamburger");

document.getElementById("submitBtn").addEventListener("click", function () {
  this.textContent = "✓ Sent! We'll be in touch.";
  this.style.background = "#1a7a3c";
  setTimeout(() => {
    this.textContent = "Send Enquiry →";
    this.style.background = "";
  }, 3500);
});

hamburgerBtn.addEventListener("click", () => {
  toggleNav(navs, hamburgerBtn);
});

navs.addEventListener("click", (e) => {
  if (e.target) {
    closeNav(navs, hamburgerBtn);
  }
});
