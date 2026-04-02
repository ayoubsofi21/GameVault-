import { games } from "./games.js";
// import { addCartEvents } from "./cart.js";
import { addCartEvents } from "./card.js";

import { initSearchEvent } from "./main.js";
export function displayGames(gameList = games) {
  const container = document.querySelector(".card-container");
  container.innerHTML = "";
  gameList.forEach((game) => {
    const card = document.createElement("div");
    card.innerHTML = `
     <div class="px-4 space-y-4 my-4">
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
          class="add-to-cart border border-orange-400 text-orange-500 px-4 py-1 rounded-lg hover:bg-orange-100 transition"
          data-id="${game.id}"
        >
          Add to cart
        </button>
        </div>
      </div>
    </div>

   
  `;

    container.appendChild(card);
  });
  addCartEvents();
}
export function initSearch() {
  return `
  <div class="p-4">
      <div class="flex items-center bg-white rounded-xl shadow px-4 py-2">
        <input type="search" placeholder="Search Anything..." class="search-input flex-1 outline-none text-gray-700" />
        <button class="ml-2 text-gray-400">🎤</button>
      </div>
    </div>
  `;
}
export const createHeader = () => `
  <header class="bg-white p-4 rounded-b-2xl shadow flex  justify-between items-center sticky top-0">
    <h1 class="text-2xl font-bold">
      <span class="text-orange-400">Game</span><span class="text-teal-500">Vault</span>
    </h1>
    <button id="cartBtn" class="bg-teal-500 text-white p-3 rounded-full shadow-md"> 
    <a href=./cart.html>🛒</a></button>
  </header>
`;
export const createCategory = () => `
  <div class="px-4 mb-4 flex space-x-2">
    <button class="category-btn bg-white px-4 py-2 rounded-full shadow" data-genre="All">All</button>
    <button class="category-btn bg-white px-4 py-2 rounded-full shadow" data-genre="Action">Action</button>
    <button class="category-btn bg-white px-4 py-2 rounded-full shadow" data-genre="RPG">RPG</button>
    <button class="category-btn bg-white px-4 py-2 rounded-full shadow" data-genre="FPS">FPS</button>
    <button class="category-btn bg-white px-4 py-2 rounded-full shadow" data-genre="FPS">RPT</button>
   
  </div>
`;

export function initHomePage() {
  const app = document.querySelector("#app");

  app.innerHTML = `
  ${createHeader()}
  ${initSearch()}
  ${createCategory()}
  <div class="card-container"></div>
  `;

  displayGames();
  initSearchEvent();
}
initHomePage();
