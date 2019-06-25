const input = process.argv.slice(2)[0];

const dice = function() {
  return Math.ceil(Math.random() * 6);
};

const roll = function(input) {
  let temp = "";
  for (let i = 0; i < input; ++i) {
    temp += dice();
    if (i === input - 1) {
      temp += "";
    } else {
      temp += ", ";
    }
  }
  return temp;
};

console.log(`Rolled ${input} dice: ${roll(input)}`);