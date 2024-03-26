import victory from "../end_game/victory.js";
import defeat from "../end_game/defeat.js";

export default function userClick(timer) {
  const gameItems = document.querySelectorAll(".game-item");
  const numberHits = document.querySelector(".number-hits");
  const numberMisses = document.querySelector(".number-misses");

  let missed = 0;
  let hits = 0;

  for (const gameItem of gameItems) {
    gameItem.addEventListener("click", (e) => {
      if (e.target.className === "game_item_img") {
        numberHits.textContent = +numberHits.textContent + 1;
        missed++;
        e.target.style.display = "none"; // Hide the clicked character
      }

      if (missed == 10) {
        victory();
        clearTimeout(timer);
      }

      if (e.target.className === "game-item") {
        numberMisses.textContent = +numberMisses.textContent + 1;
        hits++;
      }

      if (hits == 5) {
        defeat();
        clearTimeout(timer);
      }
    });
  }
}
