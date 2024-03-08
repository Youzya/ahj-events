import "../game/game.css";

export default function victory() {
  let div = document.createElement("div");
  div.className = "modal";
  const number_hits = document.querySelector(".number-hits");
  let x = number_hits.textContent;

  div.innerHTML = `<span>ПОБЕДА!!! <br/> Вы попали ${x} раз <br/> Игра завершена!</span>`;

  document.body.append(div);
}
