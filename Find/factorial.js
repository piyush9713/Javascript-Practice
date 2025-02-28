// let factorial = (num) => {
//   let result = 1
//   for (let i = 1; i <= num; i++) {
//     result *= i
//   }
//   return result
// }

// function factorial(num) {
//   if (num === 1) return 1
//   return num * factorial(num - 1)
// }

// let fact = 5;
//   for (let i = 1; i < 5; i++) {
//     fact = fact + i;
//   }
//   console.log(fact);

let factorial = (num) => {
  return num ? num * factorial(num - 1) : 1;
};

console.log(factorial(5));
