import Goblin from "./components/game/game.js";
import userClick from "./components/click/click.js";

document.addEventListener("DOMContentLoaded", () => {
  const playingArea = new Goblin(document.querySelector(".playing-field"));

  const randomMoving = setInterval(playingArea.randomMoving, 1000);

  userClick(randomMoving);
});
