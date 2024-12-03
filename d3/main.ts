const getTotal = (input: Array<string>) => {
  const cleaned = input?.map((value) => {
    const firstRemove = value.replace("mul(", "");
    return firstRemove.replace(")", "");
  });

  return cleaned
    ?.map((value) => {
      const [left, right] = value.split(",");
      return +left * +right;
    })
    .reduce((a, b) => a + b, 0);
};

// part 1
const input = Deno.readTextFileSync("./input.txt");
const found = input.match(/mul\(\d{1,3},\d{1,3}\)/g);
console.log(`part 1 : ${getTotal(found!)}`);

// part 2
const input2 = Deno.readTextFileSync("./input.txt");
const matches = input2.match(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g);

// Traverse array and if don't appears remove that and next index
for (let i = 0; i < matches!.length; i++) {
  const item = matches![i];
  if (item === "don't()") {
    while (matches![i] !== "do()" && matches![i] !== undefined) {
      matches!.splice(i, 1);
    }
  }
  if (matches![i] === "do()") matches!.splice(i, 1);
}

console.log(`part 2 : ${getTotal(matches!)}`);
