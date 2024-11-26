let playerScore = 0;
let aiScore = 0;

const choices = ["piedra", "papel", "tijeras"];
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const restartButton = document.getElementById("restart-button");

// Función para jugar una ronda
function playRound(playerChoice) {
  const aiChoice = choices[Math.floor(Math.random() * 3)];
  document.getElementById("player-icon").textContent = getIcon(playerChoice);
  document.getElementById("ai-icon").textContent = getIcon(aiChoice);

  if (playerChoice === aiChoice) {
    updateScore("¡Es un empate!");
  } else if (
    (playerChoice === "piedra" && aiChoice === "tijeras") ||
    (playerChoice === "papel" && aiChoice === "piedra") ||
    (playerChoice === "tijeras" && aiChoice === "papel")
  ) {
    playerScore++;
    updateScore("¡Ganaste esta ronda!");
  } else {
    aiScore++;
    updateScore("¡La IA gana esta ronda!");
  }
}

// Actualizar puntuación y verificar si alguien ganó
function updateScore(result) {
  let outcomeText = result;

  // Actualizar el mensaje
  document.getElementById("outcome").textContent = outcomeText;

  // Actualizar los puntajes
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("ai-score").textContent = aiScore;

  if (playerScore >= 15) {
    showPopup("🎉 ¡Ganaste la partida!");
  } else if (aiScore >= 15) {
    showPopup("💻 ¡La IA ganó la partida!");
  }
}

// Mostrar el popup
function showPopup(message) {
  popupMessage.textContent = message;
  popup.classList.remove("hidden");
}

// Reiniciar el juego
function resetGame() {
  playerScore = 0;
  aiScore = 0;
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("ai-score").textContent = aiScore;
  document.getElementById("outcome").textContent = "¡Haz tu jugada!";
  document.getElementById("player-icon").textContent = "---";
  document.getElementById("ai-icon").textContent = "---";
  popup.classList.add("hidden");
}

// Obtener el ícono para las elecciones
function getIcon(choice) {
  switch (choice) {
    case "piedra":
      return "🪨";
    case "papel":
      return "📄";
    case "tijeras":
      return "✂️";
  }
}

// Evento para las elecciones
document.querySelectorAll(".choice").forEach((button) =>
  button.addEventListener("click", () => playRound(button.dataset.choice))
);

// Evento para el botón de reinicio
restartButton.addEventListener("click", resetGame);
