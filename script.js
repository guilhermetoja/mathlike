// Selecionar o gameNav (parte de cima da tela) e mudamos o texto e o tamanho da fonte

const gameNav = document.querySelector(".mainGameNav");
gameNav.innerHTML = "Fase 1";
gameNav.style.fontSize = "36px";

// Selecionar as partes principais do jogo, area de jogo, deck e mao

const playArea = document.querySelector("#playArea");
const playerMainDeck = document.querySelector("#playerMainDeck");
const playerMainHand = document.querySelector("#playerMainHand");

// Adiciono um evento quando o botao e clicado
playerMainDeck.addEventListener("click", () => {
  console.log("clicked");
});
