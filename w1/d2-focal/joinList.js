// go over each index of the array, add each index to a string
let joinList = function(array) {
  let output = "";
  for (let i = 0; i < array.length; ++i) {
    output += array[i];
    if (i === array.length - 1) {
      output += "";
    } else {
      output += ", ";
    }
  }

  return output;
};

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
console.log("Today I learned about " + joinList(conceptList));