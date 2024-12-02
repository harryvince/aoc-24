const input = Deno.readTextFileSync("./input.txt");

const lines = input
  .split("\n")
  .filter((v) => v)
  .map((line) => line.split(" "));
let safeReports = 0;

lines.forEach((line) => {
  let reports = 0;
  const values = { increased: 0, decreased: 0, same: 0 };
  line.forEach((value, index) => {
    if (index !== index - (line.length - 1)) {
      const nextValue = +line[index + 1];
      const diff = Math.abs(+value - nextValue);
      if (diff >= 1 && diff <= 3) {
        reports++;
        if (+value < nextValue) values.increased++;
        else if (+value > nextValue) values.decreased++;
        else if (+value === nextValue) values.same++;
      }
    }
  })

  const nonZeroKeys = Object.entries(values).filter(
    ([_, value]) => value !== 0,
  );
  if (reports === line.length - 1 && nonZeroKeys.length === 1) {
    safeReports++;
  }
});

console.log(`Part 1: ${safeReports}`);
