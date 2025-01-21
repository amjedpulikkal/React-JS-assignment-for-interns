function findNumberOfChar(val = "") {
  const char = val.split("");
  console.log(char)
  char.sort((a, b) => a - b);
  let result = {};
  for (let i = 0; i < char.length; i++) {
    if (result[char[i]] !== " ") {
      if (result[char[i].toLowerCase()]) {
        console.log( result[char[i]])
        result[char[i]] = result[char[i]]+1;
      } else {
        result[char[i].toLowerCase()] = 1;
      }
    }
  }

  return result;
}

console.log(findNumberOfChar("Amolya Sharma"));



