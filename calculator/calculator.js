module.exports = {
  add
};

// function add(a = 0, b = 0) {
//   return a + b;
// }

function add(args) {
  const numbers = Array.isArray(args) ? args : Array.from(arguments);

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

// function arrSum(arr) {
//   const sum = arr.reduce((sum, num) => {
//     return sum + num;
//   }, 0);
//   return sum;
// }

function honest () {
  return true;
}