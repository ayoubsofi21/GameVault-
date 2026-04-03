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

    let searchData = [];

    for (let i = 0; i < games.length; i++) {
      let val = games[i].title.toLowerCase();

      if (val.includes(value)) {
        searchData.push(games[i]);
      }
    }

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
