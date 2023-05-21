const numDice = process.argv[2];

function rollDice(num) {
  const rolls = [];
  for (let i = 0; i < num; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    rolls.push(roll);
  }
  return rolls;
}

const diceRolls = rollDice(numDice);
console.log(`Rolled ${numDice} dice: ${diceRolls.join(", ")}`);