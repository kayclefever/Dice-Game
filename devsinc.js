let rolling = false;

let intervalId;

const numDiceInput = document.getElementById("numDice");
const numSidesInput = document.getElementById("numSides");
const startStopButton = document.getElementById("startStopButton");
const outputDiv = document.getElementById("output");
const totalDiv = document.getElementById("total");

startStopButton.addEventListener("click", () => {
  if (rolling) {
    clearInterval(intervalId);
    startStopButton.textContent = "Roll Dice";
    rolling = false;
  } else {
    startRollingDice();
    startStopButton.textContent = "Stop Rolling";
    rolling = true;
  }
});

function startRollingDice() {
  const numDice = parseInt(numDiceInput.value);
  const numSides = parseInt(numSidesInput.value);

  intervalId = setInterval(() => {
    const results = [];

    let total = 0;

    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * numSides) + 1;
      results.push(`Die ${i + 1}: ${roll}`);
      total += roll;
    }

    outputDiv.textContent = results.join(",");
    totalDiv.textContent = `Total: ${total}`;
  }, 100);
}
