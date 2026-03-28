import { toggleNav } from "../utils/navigations.js";
import { closeNav } from "../utils/navigations.js";
const navs = document.getElementById("navLinks");
const hamburgerBtn = document.getElementById("hamburger");
const whatsAppBtn = document.getElementById("wa-btn");

function whatsappLink() {
  const whatsappMessage = `Hello, I am interested in your services. Could you please provide more information?`;
  window.open(
    `https://wa.me/233247857046?text=${encodeURIComponent(whatsappMessage)}`,
    "_blank",
  );
}

whatsAppBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const whatsappMessage = `Hello, I am interested in your services. Could you please provide more information?`;
  window.open(
    `https://wa.me/233247857046?text=${encodeURIComponent(whatsappMessage)}`,
    "_blank",
  );
});

hamburgerBtn.addEventListener("click", () => {
  toggleNav(navs, hamburgerBtn);
});

navs.addEventListener("click", (e) => {
  if (e.target) {
    closeNav(navs, hamburgerBtn);
  }
});
