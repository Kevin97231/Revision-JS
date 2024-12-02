var x = 10;

console.log("1", x); // 10

{
  let x = 2;
  console.log("2", x); // 2

  var y = 5;
  const Z = 6;
}

console.log("3", x); // 10
console.log("4", y); // 5
console.log("5", Z); // erreur
