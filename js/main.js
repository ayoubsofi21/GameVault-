import { games } from "./games.js";
import { displayGames } from "./ui.js";

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
