let corruptedMemory = document.getElementsByTagName("pre")[0].textContent;

// identify mul(x,y)
const regularExpression = /mul\((\d+),(\d+)\)/g;
const memoryArray = corruptedMemory.match(regularExpression);

// function to caculate mul(x,y) = x*y
const multiply = (x, y) => {
  return x * y;
};

// split memoryArray
// and turn x and y into numbers
const memory = memoryArray.map((mulNum) => {
  let mul = mulNum.split(",");
  let x = parseInt(mul[0].slice(4));
  let y = parseInt(mul[1].slice(0, -1));
  return multiply(x, y);
});

// add all sum of mul(x,y)
let result = 0;
for (let i = 0; i < memory.length; i++) {
  result += memory[i];
}

console.log(result);
