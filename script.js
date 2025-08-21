// Selecionar o gameNav (parte de cima da tela) e mudamos o texto e o tamanho da fonte

const gameNav = document.querySelector(".mainGameNav");
gameNav.innerHTML = "Math Like";
gameNav.style.fontSize = "48px";

// Selecionar as partes principais do jogo, area de jogo, deck e mao

const playArea = document.querySelector("#playArea");
const playerMainDeck = document.querySelector("#playerMainDeck");
const playerMainHand = document.querySelector("#playerMainHand");

// Adiciono um evento quando o botao e clicado
playerMainDeck.addEventListener("click", () => {
  console.log("clicked");
});
