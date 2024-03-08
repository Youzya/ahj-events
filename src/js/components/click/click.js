import victory from "../end_game/victory.js";
import defeat from "../end_game/defeat.js";

export default function userClick(timer) {
  const game_item = document.querySelectorAll(".game-item");
  const number_hits = document.querySelector(".number-hits");
  const number_misses = document.querySelector(".number-misses");

  let missed = 0;
  let hits = 0;
  for (const playingItem of game_item) {
    playingItem.addEventListener("click", (e) => {
      if (e.target.className === "game_item_img") {
        number_hits.textContent = +number_hits.textContent + 1;
        missed++;
      }

      if (missed == 10) {
        victory();
        clearTimeout(timer);
      }

      if (e.target.className === "game-item") {
        number_misses.textContent = +number_misses.textContent + 1;
        hits++;
      }

      if (hits == 5) {
        defeat();
        clearTimeout(timer);
      }
    });
  }
}
