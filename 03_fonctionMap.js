const persons = [
  { firstName: "Malcom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const newPersons = persons.map((person) =>
  [person.firstName, person.lastName].join(" ")
);

console.log(newPersons);

console.log(persons);

const chiffre = [1, 2, 3, 4];

const chiffreAuCarre = chiffre.map((chiffre) => chiffre * chiffre);
console.log(chiffreAuCarre);

// La fonction flatMap()

let result = chiffre.map((number) => [number * number]);
console.log("result: ", result);

let result2 = chiffre.flatMap((number) => [number * number]);
console.log("result: ", result2);
