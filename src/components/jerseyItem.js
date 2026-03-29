export function createJerseyItem(jersey) {
  const jerseyItem = document.createElement("div");
  jerseyItem.classList.add("gallery-item");
  jerseyItem.innerHTML = `
          <img
            src="${jersey.image}"
            alt="${jersey.league} ${jersey.team} Jersey"
          />
          `;
  return jerseyItem;
}
