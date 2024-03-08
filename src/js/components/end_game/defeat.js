import "../game/game.css";

export default function defeat() {
  let div = document.createElement("div");
  div.className = "modal";
  const number_misses = document.querySelector(".number-misses");
  let x = number_misses.textContent;
  div.innerHTML = `<span>ПРОИГРЫШ!!! <br/> Вы промахнулись ${x} раз <br/> Игра завершена!</span>`;

  document.body.append(div);
}
