const input = process.argv.slice(2)[0];

const password = function() {
  let temp = "";
  for (let i = 0; i < input.length; ++i) {
    input[i] === "a" ? temp += "4" : input[i] === "e" ? temp += "3" : input[i] === "o" ? temp += "0" : input[i] === "l" ? temp += "1" : temp += input[i];
  }
  return temp;
};

console.log(password());