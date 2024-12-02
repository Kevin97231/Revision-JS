// Spread operator

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const persons = [
  { firstName: "Malcom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const copieNumbersOne = [...numbersOne];

console.log(...numbersOne);

personsCopie = persons.map((person) => {
  return { ...person };
});

const numbersCombined = [...numbersOne, ...numbersTwo, ...personsCopie];
console.log(numbersCombined);

numbersCombined[6].firstName = "John";

console.log("numbersCombined", numbersCombined[6]);
console.log("persons", persons);

// Destructuration

const cars = ["Mustang", "f-150", "expedition"];

const [car1, car2, car3] = cars;

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

console.log(rest);

const calculate = (a, b) => {
  const add = () => a + b;
  const subtract = () => a - b;
  const multiply = () => a * b;
  const divide = () => a / b;

  return [add, subtract, multiply, divide];
};

const [addition, soustraction] = calculate(8, 2);
console.log(addition(), soustraction());

const [, , , division] = calculate(8, 3);

const calculateWithObject = (a, b) => {
  const add = () => a + b;
  const subtract = () => a - b;
  const multiply = () => a * b;
  const divide = () => a / b;

  return { add, subtract, multiply, divide };
};

const { divide } = calculateWithObject(8, 2);
console.log(divide());

const person = { name: "John", age: 30, city: "New York" };

let name = "toto";

const { name: nom, age, city } = person;
console.log(nom);

const copie = { ...person };

const personInfo = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};
personInfo(person);

const functionSpread = (...params) => {
  console.log(params);
};

functionSpread(1, 3, 25, "toto");
