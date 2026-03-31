export function createJerseyItem(jersey) {
  const jerseyItem = document.createElement("div");
  jerseyItem.classList.add("shop-item");
  jerseyItem.innerHTML = `
          <img
            src="${jersey.image}" loading="lazy"
            alt="${jersey.league} ${jersey.team} Jersey"
          />
          `;
  return jerseyItem;
}
