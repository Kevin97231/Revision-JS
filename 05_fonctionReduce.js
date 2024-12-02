const myArray = [1, 2, 3, 4];

const sumArray = myArray.reduce(
  (total, currentValue) => total + currentValue,
  0
);

console.log(sumArray);
