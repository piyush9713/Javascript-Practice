let sum = (num) => {
  return num ? num + sum(num - 1) : 0;
};
console.log(sum(5));
