import { games } from "./games.js";
import { DisplayCategory } from "./category.js";
import {
  initSearch,
  displayGames,
  createHeader,
  createCategory,
} from "./ui.js";
export function initSearchEvent() {
  const input = document.querySelector(".search-input");

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    const searchData = games.filter((game) =>
      game.title.toLowerCase().includes(value),
    );

    displayGames(searchData);
  });
}

export function initHomePage() {
  const app = document.querySelector("#app");

  app.innerHTML = `
  ${createHeader()}
  ${initSearch()}
  ${createCategory()}

  `;

  displayGames();
  initSearchEvent();
  DisplayCategory();
}
initHomePage();
