import { toggleNav } from "../utils/navigations.js";
import { closeNav } from "../utils/navigations.js";
import { filterJerseysByLeague } from "../utils/filter.js";
import { createJerseyItem } from "../components/jerseyItem.js";
import { jerseyStore } from "../utils/store.js";

const jerseyGrid = document.getElementById("gallery-grid");
const filterTabs = document.getElementById("filter-tabs");
const emptyState = document.getElementById("gallery-empty");

for (const jersey of jerseyStore) {
  const jerseyItem = createJerseyItem(jersey);
  jerseyGrid.appendChild(jerseyItem);
}

let prevActiveTab = filterTabs.querySelector(".active");

filterTabs.addEventListener("click", (e) => {
  const activeTab = e.target.closest("button");
  prevActiveTab.classList.remove("active");
  activeTab.classList.add("active");
  prevActiveTab = activeTab;
  const leagueCat = activeTab.dataset.filter.replace("-", " ");
  const filteredJerseys = filterJerseysByLeague(leagueCat);

  jerseyGrid.innerHTML = ""; //Set jerseys grid to empty before displaying filtered jerseys
  if (!filteredJerseys.length) {
    emptyState.classList.remove("hidden");
    emptyState.classList.add("show");
    return;
  }

  emptyState.classList.remove("show");
  emptyState.classList.add("hidden");
  for (const jersey of filteredJerseys) {
    const jerseyItem = createJerseyItem(jersey);
    jerseyGrid.appendChild(jerseyItem);
  }
});
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
