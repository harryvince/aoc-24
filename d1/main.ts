const input = Deno.readTextFileSync("./input.txt");

const getCleanedInput = () => {
  const arr1: Array<number> = [];
  const arr2: Array<number> = [];
  input
    .replaceAll("\n", " ")
    .split(" ")
    .filter((v) => v)
    .forEach((value, index) => {
      if ((index + 1) % 2 === 0) arr1.push(+value);
      else arr2.push(+value);
    });

  return [arr1, arr2];
};

let total = 0;
const [arr1, arr2] = getCleanedInput();

arr1.sort();
arr2.sort();

arr1.forEach((value, index) => {
  const otherArrayValue = arr2[index];
  if (value < otherArrayValue) total += otherArrayValue - value;
  else if (value > otherArrayValue) total += value - otherArrayValue;
});

console.log(`Part 1: ${total}`);

let total2 = 0;
const [arr3, arr4] = getCleanedInput()

arr3.forEach((value) => {
  let occurences = 0;
  for (let x = 0; x < arr4.length; x++) {
    if (arr4[x] === value) occurences++;
  }
  total2 += value * occurences;
});

console.log(`Part 2: ${total2}`);
