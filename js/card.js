import { games } from "./games.js";

export function addCartEvents() {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const gameId = btn.dataset.id;

      const game = games.find((g) => g.id == gameId);

      addToCart(game);

      // redirect to cart page
      window.location.href = "cart.html";
    });
  });
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.querySelector(".cart-container");
const totalPriceEl = document.getElementById("total-price");
const checkoutBtn = document.querySelector(".checkout-btn");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function addToCart(game) {
  const existing = cart.find((item) => item.id === game.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...game, quantity: 1 });
  }

  saveCart();
}
function renderCart() {
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((game, index) => {
    total += game.price * game.quantity;

    const div = document.createElement("div");

    div.className = "flex justify-between items-center p-3 border rounded-lg";

    div.innerHTML = `
        </div>
            <div class="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 w-[420px]">

            <img 
            src="${game.image}"
            alt="Product"
            class="w-24 h-24 rounded-xl object-cover"
            >

            <div class="flex-1">
            <h2 class="font-semibold text-gray-900 text-lg">
                ${game.title}
            </h2>

            <p class="text-gray-400 text-sm mt-1">
                $45 (-$4.00 Tax)
                $${game.price}
            </p>

            <div class="flex items-center gap-3 mt-3">
                <button class="decrease w-8 h-8 rounded-full border flex items-center justify-center text-gray-600 hover:bg-gray-100">
                ↓
                </button>

                <span class=" font-medium">${game.quantity}</span>

                <button class="increase w-8 h-8 rounded-full border flex items-center justify-center text-gray-600 hover:bg-gray-100">
                ↑
                </button>
            </div>
            </div>

            <button class="remove text-gray-400 hover:text-red-500">
            🗑
            </button>

        </div>
    `;

    container.appendChild(div);

    div
      .querySelector(".increase")
      .addEventListener("click", () => changeQuantity(index, 1));

    div
      .querySelector(".decrease")
      .addEventListener("click", () => changeQuantity(index, -1));

    div
      .querySelector(".remove")
      .addEventListener("click", () => removeFromCart(index));
  });

  if (totalPriceEl) {
    totalPriceEl.textContent = total.toFixed(2);
  }
}

renderCart();
