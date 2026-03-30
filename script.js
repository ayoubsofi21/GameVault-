import { games } from "./data.js";

const container = document.querySelector(".container");

games.forEach((game) => {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-xl shadow-md p-4 relative flex flex-col items-center";

  card.innerHTML = `
    <!-- Heart icon top-left -->
    <button class="absolute top-3 left-3 text-gray-400 hover:text-red-500">
    </button>

    <!-- Image -->
    <img src="${game.image}" class="w-full h-40 object-cover rounded-lg mb-4">

    <!-- Title -->
    <h2 class="text-md font-semibold text-gray-800 text-center">${game.title}</h2>

    <!-- Price and rating -->
    <div class="flex items-center justify-between w-full mt-2">
      <p class="font-bold text-gray-800">${game.price.toLocaleString()} $</p>
      <div class="flex items-center">
        <span class="text-yellow-400 font-semibold">★</span>
        <span class="ml-1 text-gray-500 text-sm">(${game.rating || 0})</span>
      </div>
    </div>

    <!-- Add to Cart Button -->
    <button class="mt-4 w-full ${
      game.inCart
        ? "bg-green-100 text-green-600"
        : "bg-white border border-orange-400 text-orange-500"
    } rounded-lg py-2 hover:bg-green-200 transition">
      Add to cart
    </button>
  `;

  container.appendChild(card);
});
