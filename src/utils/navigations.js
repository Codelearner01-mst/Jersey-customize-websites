export function toggleNav(navs, btn) {
  navs.classList.toggle("open");
  btn.classList.toggle("active");
}

export function closeNav(navs, btn) {
  navs.classList.remove("open");
  btn.classList.remove("active");
}
