function blockMainThread(ms) {
  const start = Date.now();
  let current = start;
  // console.log(current - start < ms);
  while (current - start < ms) {
    current = Date.now();
  }
}

console.log("Starting...");
blockMainThread(3000);
console.log("Done");
