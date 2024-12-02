function helloName(name) {
  return name;
}

console.log(helloName("kévin"));

const helloNameFleche = (name) => {
  return name;
};

console.log(helloNameFleche("Kévin"));

const helloNameFleche2 = (name) => name;

console.log(helloNameFleche2("Kévin"));

const table = ["Riri", "Fifi", "Loulou"];

table.forEach(function (currentValue, index, arr) {
  console.log(
    `valeur de l'item parcouru: ${currentValue}, index: ${index}, arr: ${arr}`
  );
});

table.forEach((currentValue) =>
  console.log(`valeur de l'item parcouru: ${currentValue}`)
);
