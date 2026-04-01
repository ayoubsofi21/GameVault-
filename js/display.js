import { games } from "./games.js";
function displayGames() {
  const container = document.querySelector(".card-container");
  games.forEach((game) => {
    console.log(game);
    const card = document.createElement("div");
    card.innerHTML = `
     <div class="px-4 space-y-4">
      <div class="bg-white rounded-xl shadow p-4 flex flex-col">
        <img
          src="${game.image}"
          class="rounded-lg w-full h-48 object-cover mb-2"
        />
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-sm text-purple-700 font-semibold">${game.title}</h2>
            <p class="text-gray-700 font-bold">${game.price.toLocaleString()}$</p>
          </div>
          <button
            class="border border-orange-400 text-orange-500 px-4 py-1 rounded-lg hover:bg-orange-100 transition"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>

   
  `;

    container.appendChild(card);
  });
}
// function initSearch() {
// //   const home = document.querySelector(".card-container");
// //   const searchHtml = document.createElement("div");
//   return `<div class="p-4">
//       <div class="flex items-center bg-white rounded-xl shadow px-4 py-2">
//         <input
//           type="text"
//           placeholder="Search Anything..."
//           class="flex-1 outline-none text-gray-700"
//         />
//         <button class="ml-2 text-gray-400">🎤</button>
//       </div>
//     </div>
// `;
// }
export function initHomePage() {
  //   initSearch();
  displayGames();
  //   initCategoryFilter();
}
initHomePage();
