const words = ["spray", "elite", "exuberant", "destruction", "present"];

const wordsFilter = words.filter((word) => word.length > 6);

console.log(wordsFilter);

const txtFilter = (entreeUtilisateur) => {
  return words.filter((word) => word.indexOf(entreeUtilisateur) !== -1);
};

console.log(txtFilter("es"));
