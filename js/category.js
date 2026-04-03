import { displayGames } from "./ui.js";
import { games } from "./games.js";

export function DisplayCategory() {
  const categoryBtns = document.querySelectorAll(".category-btn");

  categoryBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let category = e.target.dataset.categories;
      //   console.log(category);
      if (category.toLowerCase() === "all") {
        displayGames(games);
        console.log("khdm hna");
      } else {
        const result = [];
        for (let i = 0; i < games.length; i++) {
          if (games[i].category.toLowerCase() === category.toLowerCase()) {
            // displayGames(games[i]);
            result.push(games[i]);
          }
        }
        displayGames(result);
      }
    });
  });
}
