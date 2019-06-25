const args = process.argv.slice(2);

for (let i = 0; i < args.length; ++i) {
  let string = "";
  let temp = args[i];
  for (let j = temp.length - 1; j >= 0; --j) {
    string += temp[j];
  }
  console.log(string);
}