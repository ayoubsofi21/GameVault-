import { games } from "./games.js";

export function addCartEvents() {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const gameId = btn.dataset.id;

      const game = games.find((g) => g.id == gameId);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push(game);

      localStorage.setItem("cart", JSON.stringify(cart));

      // redirect to cart page
      window.location.href = "cart.html";
    });
  });
}
