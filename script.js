// Is die held or active? 
function toggleDieHold(id) {
  const die = document.getElementById(id);

  // Current State
  const isActive = die.getAttribute("data-active") === "true";

  // Toggles state
  die.setAttribute("data-active", !isActive);

  // Adds or removes "held" class based on new state
  if (isActive) {
    die.classList.add("held");   // now inactive → held
  } else {
    die.classList.remove("held"); // now active → not held
  }
}

// Rolls all active dice
function rollDice() {
  const dice = document.querySelectorAll(".die");

  dice.forEach((die) => {
    const isActive = die.getAttribute("data-active") === "true";

    if (isActive) {
      // Generates random number 1–6
      const roll = Math.floor(Math.random() * 6) + 1;

      // Updates image and alt text
      die.src = `images/${roll}.png`;
      die.alt = `Die ${roll}`;
    }
  });
}

