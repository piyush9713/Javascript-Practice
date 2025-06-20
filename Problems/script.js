// function largestWord (str){
//   let words = str.split(" ");
//   let largest = "";
//   for (let word of words){
//   if(word.length > largest.length){
//     largest = word
//   } }
//   return largest
//   }

// console.log(largestWord("Hii my name is piyush"))

// function largestWord (str){
//   let largest = ""
//   return str.split(" ").reduce( (largest, word ) =>
//      word.length > largest.length ? word : largest
//   )
// }
// console.log(largestWord("Hii my name is piyush"))

// function largestNo (arr){
//   let largest = arr[0];
//   for (let value of arr){
//   if(value > largest){
//     largest = value
//   }
//   }
//   return largest
//   }

// console.log(largestNo([4,45,88,211,85,2,6]))

// const hashedWord=(str)=>{
//   let words = str.split(" ");
//   const singleWord = words.map((word)=>
//      word.replace(word[0], word[0].toUpperCase())
//   )
//   return `#${singleWord.join("")}`
//   }

// console.log(hashedWord("piyush choudhary"))

// function findChar(str, word){
//   const chars = str.toLowerCase().split("")
//   const wordCount = word.toLowerCase()
//   let count = 0
//   for (let char of chars){
//     if(char == wordCount){
//       count++
//     }
//   }
//   return count
// }

//  console.log(findChar("hii my name is piyush", "i"))

// function triangle(a, b, c) {
//  if (a === b && b === c) return "eqiletral triangle"
//  if (a === b || b === c || c === a ) return "isosceles triangle"
//  return "scelene triangle"
// }

// console.log(triangle(5, 4, 5))

// function isPalindrome(str){
//   str = str.toLowerCase()
//   const r_str = str.split("").reverse().join("")
//  return(str == r_str) ? true : false

// }

// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("hello"))

// function factorial (num){
//   let fact = 1
//   for(let i=1; i<=num; i++){
//     fact = fact*i
//   }
//   return fact
// }

// function factorial(num){
//   return num ? num * factorial(num - 1) : 1
// }

// console.log(factorial(10))

// function sum (num) {
//   let sum = 0;
//   for(let i=0; i<=num; i++){
//     sum = sum+i
//   }
//   return sum
// }

// function sum (num) {
//   return num ? num + sum(num-1) : 0
// }

// console.log(sum(5))

// function findAvarage (num) {
//   let length = num.length
//   const avg =  num.reduce((acc, value)=>{
//     return value+acc
//   })
//   return avg/length
// }

// console.log(findAvarage([2,2,5,2,8,9]))

// function isEqualArray (arr1, arr2) {
// if(arr1.length !== arr2.length){
//    return false
// }
// return  arr1.every((value,index) => value === arr2[index])
// }

// console.log(isEqualArray([1,2,3],[1,2,3]))

// function sumOfNumber(num){
//   return num.toString().split("").map((value => Number(value))).reduce((acc , value) => acc + value)
// }

// function sumOfNumber(num){
//   const value = Array.from(String(num), Number)
// //   return value.reduce((acc, value)=> acc + value)
//   let number = null
//   for(let i=1; i<=value.length; i++){
//     number = number + i
//   }
//   return number
// }

// console.log(sumOfNumber(1234))

// function uniqueValue (arr) {
//   return [...new Set(arr)]
// }

// console.log(uniqueValue([1,2,2,3,4,4,5,6,7,7,7]))

// function countVowel (str) {
//   const vowels = ["a","e","i","o","u"]
//   str = str.toLowerCase().split("")
//   let count = 0
//   str.forEach((word)=>{
//     if(vowels.includes(word)){
//       count++
//   }
//   })
//   return count
// }

// console.log(countVowel("Hii my name is piyush"))

// function isPowerOfTwo (num) {
//   for(let i=0; i<=num; i++){
//     if(2**i === num){
//       return true
//     }
//   }
//   return false
// }

// console.log(isPowerOfTwo(8))

// function squareAndSum (arr) {
//   return arr.map((value) => value * value).reduce((acc, value)=>
//    acc + value
// )
// }

// function squareAndSum (arr) {
//   return arr.reduce((acc, value)=>
//    (value * value) + acc, 0)
// }

// function squareAndSum (arr) {
//   let sum = 0;
//   arr.forEach((value)=>{
//     sum = sum + value * value
//   })
//    return sum
// }

// console.log(squareAndSum([2,3]))

// function findMin (arr) {
//   let min = arr[0]
//   arr.forEach((num)=>{
//     if(num < min){
//       min = num
//     }
//   })
//   return min
// }

// console.log(findMin([8,2,3,4,5]))

// function toCamelCase (str) {
// //   return str = str.trim().toLowerCase().split(" ").join("_")
//  return str.trim().toLowerCase().split(" ").map((word, index)=>
//  index === 0 ?  word :  word.replace(word[0], word[0].toUpperCase())
//   ).join("")
// }

// console.log(toCamelCase("piyush choudhary"))

// function isUpperCase (char){
//   return char === char.toUpperCase()
// }

// console.log(isUpperCase("P"))

// function isPrimeNo (num){
//   for(let i=2; i<num; i++){
//     if(num%i === 0){
//       return false
//     }
//   }
//   return true
// }

// console.log(isPrimeNo(10))

// function isEvenNo (num) {
//   return num%2 === 0 ? true : false;
// }

// console.log(isEvenNo(10))

// function isSubString (str, subStr) {
//   str = str.split(" ")
//   return str[0] === subStr
// }

// console.log(isSubString("Hii Piyush", "Hii"))

// function reverseString (str) {
//   str = str.split("")
//   let reverse = []
//   for(let word of str){
//     reverse.unshift(word)
//   }
//   return reverse.join("")

// }

// function reverseString (str) {
//   let reverse = ""
//   for(let i = str.length-1 ; i >= 0 ; i--){
//      reverse = reverse + str[i]
//   }
//   return reverse
// }

// console.log(reverseString("piyush"))

// function reverseArray (arr) {
//   let reverse = []
//   for(let value of arr){
//     reverse.unshift(value)
//   }
//   return reverse

// }

// console.log(reverseArray([1,2,3,6,5]))

// function reverseArray(arr){
//   let reverse = []
//   for(let i=arr.length-1; i>=0; i--){
//     reverse.push(arr[i])
//   }
//   return reverse
// }

// console.log(reverseArray([1,2,5,8,9]))

// function findMean (arr) {
//   let sum = null;
//   for(let value of arr){
//     sum = sum + value;
//   }
//   return sum/arr.length
// }

// console.log(findMean([-1,2,3,-4,5]))

// function median (arr) {
//   arr = arr.sortedArr((a,b) => a-b)
//   const index = arr.length/2
//  return index%2 === 0 ? (arr[index] + arr[index-1])/2 : arr[Math.floor(index)]
// }

// console.log(median([1,5,7,8]))

// function mode (arr) {
//   let count = {}
//   let max = 0
//   arr.forEach((num)=>{
//     count[num] = (count[num] || 0) + 1
//     if(count[num] > max){
//       max = num
//     }
//   })

//   return max
// }

// console.log(mode([2, 5, 2, 4, 6, 6, 6, 5, 5]))

// function mode (arr) {
//   let count = {}
//   let max = 0
//   let mode = []
//   arr.forEach((num)=>{
//     count[num] = (count[num] || 0) + 1
//     if(count[num] > max){
//       max = count[num]
//     }
//   })

//    for (let key in count) {
//     if (count[key] === max) {
//       mode.push(Number(key))
//     }
//   }
//   return mode
// }

// console.log(mode([2, 5, 2, 4, 6, 6, 6, 5, 5]))

// function countIntegers (arr) {
//   let obj = {}
//   arr.forEach((num)=>{
//     obj[num] = (obj[num] || 0) + 1
//   })
//   return obj
// }

// console.log(countIntegers([2,5,6,9,9,5,5,5,9,2]))

// function factorial (num) {
// //  return num ? num * factorial(num-1) : 1
//   let result = 1
//   for(let i=1; i<=num; i++){
//     result = result * i
//     console.log(result)
//   }
//   return result
// }

// console.log(factorial(5))

// function fibonacci (num) {
//   let a=0, b=1, result;
//   for(let i=2; i<=num; i++){
//     result = a+b
//     a=b
//     b=result
//    console.log(result)
//   }

// }

// fibonacci(10)

// function repeatString(str, iteration) {
//   let newStr = "";
//   for (let i = 1; i <= iteration; i++) {
//     newStr += str;
//   }
//   return newStr;
// }

// console.log(repeatString("Abc", 3));

// function truncateString (str, num) {
// //   return str.slice(0,num).concat("...")
//   str = str.split("")
//   let newStr = str.map((char, index)=>{
//     if(index < num){
//      return char
//     }
//   })
//   return newStr.join("")+"..."
// }

// console.log(truncateString("hii my name is piyush", 3))

// function numberRange (from, to) {
//   let arr = []
//   for(let i=from; i<=to; i++){
//     console.log(i)
//     arr.push(i)
//   }
//   return arr
// }

// console.log(numberRange(-13,10))

// function debounce (func, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer)
//     timer = setTimeout(()=>{
//       func.apply(this,args)
//     },delay)
//   }
// }

// function search () {
//   console.log("working")
// }

// const searchDebounce = debounce(search,500)

// searchDebounce()
// searchDebounce()
// searchDebounce()
// searchDebounce()
// searchDebounce()

// function throttle (func,interval) {
//   let timer = null
//   return function (...args) {
//     if(timer) return;
//     func.apply(this, args)
//     timer = setTimeout(()=>{
//       timer = null
//     },interval)
//   }
// }

// function resize () {
//   console.log("working")
// }

// const throttleResize = throttle(resize, 500)

// window.addEventListener("resize", throttleResize)

// function blockMainThread () {
//   let start = Date.now()
//   let current = Date.now()
//   while(start<=current){
//     console.log("working")
//   }
// }

// console.log("Start")
// blockMainThread()
// console.log("End")

// function otp (length) {
//   let code = []
//     for(let i=1; i<=length; i++){
//       let otp = Math.floor(Math.random()* 10)
//       code.push(otp)
//   }
//   return code
// }

// console.log(otp(6))

// function colorCode(){
//  return `#${Math.random().toString(16).slice(2,8).toUpperCase()}`

// }

// console.log(colorCode())

// function removeDuplicate(arr) {
//   let newArr = []
//   arr.forEach((value) => {
//     if (newArr.includes(value)) return
//     newArr.push(value)
//   })
//   return newArr
//     //   return [...new Set(arr)]
// }

// console.log(removeDuplicate([4, 8, 8, 9, 5, 6, 2, 2, 3, 4]))
// console.log(removeDuplicate(["a", "b", "b", "f", "g", "g", "w", "y", "y"]))

// function isEmptyObject (obj) {
// //   for(let key in obj){
// //     obj.hasOwnProperty(key)
// //     return true
// //   }
// //   return false
//   return Object.keys(obj).length === 0
// }

// console.log(isEmptyObject({}))

// function arrayToObject(obj) {
//   return Object.entries(obj)
// }

// const obj = {
//     xjhjcv: "cxcnmb",
//   cxcbhxcn: "ncbnm"
// }

// // const arr = [["xjhjcv", "cxcnmb"], ["cxcbhxcn", "ncbnm"]]

// console.log(arrayToObject(obj))

// function simpleInterest (p,r,t) {
//   return (p * r * t)/100
// }

// console.log(simpleInterest(1000,5,3))

// function digitalClock() {
//   const time = new Date().toLocaleString("en-US", {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: "2-digit",
//     hour12: true,
//   })

//   //   let time = new Date().toLocaleTimeString()
//   console.log(time)
//     document.getElementById("body").innerText = time

// }

// let interval = setInterval(digitalClock, 1000)
// clearInterval(interval)

// function daysDiff (d1,d2) {

//   const date1 = new Date(d1)
//   const date2 = new Date(d2)
//   let diff = Math.abs(date1 - date2)
//   return diff/(24*60*60*1000)
// }

// console.log(daysDiff("2024-01-05","2024-01-31"))

// function birthDate (d) {
// //   return d.split("-").map(Number);
//   const date1 = new Date()
//   const date2 = new Date(d)
//   let age = Math.abs(date1 - date2)
//   return Math.floor(Math.abs(age/(365*24*60*60*1000)))
// }

// console.log(birthDate("2001-10-20"))

//  const rates = {
//    USD: 1,
//    INR: 86.65,
//    YEN: 149.22,
//    IDNR: 1310.00,

//  }
// function currencyConverter (amount,from,to) {
//  let USDAmount = 0;
//  if(from !== "USD"){
//    USDAmount = amount/rates[from]
//  }else{
//    USDAmount = amount
//  }

//  return USDAmount*rates[to]

// }

// console.log(currencyConverter(1, "YEN", "USD"))

// function fizzBuzz(start, end) {
//   let arr = []
//   for (let i=12; i<=20; i++){
//     if(i%5===0 && i%3===0){
//       arr.push("fizzBuzz")
//     }else if(i%3===0){
//       arr.push("fizz")
//     } else if (i%5===0) {
//       arr.push("buzz")
//     } else{
//       arr.push(i)
//     }
//   }
//   return arr
// }

// console.log(fizzBuzz(12,20))

// function quickSort(arr) {
//   if(arr.length<= 1){
//     return arr
//   }

//   let pivot = arr[arr.length - 1]
//   let left = []
//   let right = []

//   for(let i=0; i<arr.length -1; i++){
//     if(arr[i] < pivot){
//       left.push(arr[i])
//     }else{
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)]
// }

// let arr = [4, 2, 7, 1, 9, 2];
// console.log(quickSort(arr));

// function countDuplicate(arr){
//   let obj = {}
//   let count = 0
//   for(let i=0; i<arr.length; i++){
//     if(!obj[arr[i]]){
//       obj[arr[i]] = 1
//     }else{
//       obj[arr[i]]++
//     }
//   }
//   for(let key in obj){
//     if(obj[key]>1){
//       count++
//     }
//   }
//   return count
// }
// let arr = [4, 2, 7, 1, 7, 9];
// console.log(countDuplicate(arr))

// function removeDuplicate(arr){
//   let obj = {}
//   let unique = []
//   for(let i=0; i<arr.length; i++){
//     if(!obj[arr[i]]){
//       obj[arr[i]] = true
//       unique.push(arr[i])
//     }
//   }
//   return unique
// }

// let arr = [4, 2, 7, 1, 7, 9];

// console.log(removeDuplicate(arr))

// function secondLargest (arr) {
//   let fl = -Infinity
//   let sl = -Infinity

//   for(let value of arr) {
//     if(value>fl){
//       fl = value
//     }
//   }

//   for(let value of arr) {
//     if(value>sl && value !== fl){
//       sl = value
//     }
//   }
//   return sl
// }

// let arr = [4, 2, 7, 1, 7, 9];

// console.log(secondLargest(arr))

// function reverseEachWords (str) {
//  return str.split(" ").map((words)=>{
//     let reverse = ""
//     for(let i=words.length-1; i>=0; i--){
//       reverse+=words[i]
//     }
//     return reverse
//   })
// }

// const str = "hii my name is piyush"
// console.log(reverseEachWords(str))

// function reverseWordsManually(str) {
//     let result = "";
//     let word = "";

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') {
//             word = str[i] + word;
//         } else {
//             result += word + " "; // Add reversed word and space to result
//             word = ""; // Reset for next word
//         }
//     }

//     result += word; // Add last reversed word

//     return result;
// }

// // Example usage
// let original = "hello world from chatgpt";
// let reversed = reverseWordsManually(original);
// console.log(reversed); // Output: "olleh dlrow morf tpgtahtc"

// function isArray (elem) {
//   return Array.isArray(elem)
// }

// console.log(isArray([5,7,4,2,6]))

// function isObject(elem) {
//   return typeof elem === "object" && !Array.isArray(elem) && elem !== null;
// }

// console.log(isObject({ name: "piyush" }));
// console.log(isObject([5, 7, 4, 2, 6]));

// function isInteger(num) {
//   if (num % 1 === 0) {
//     console.log("integer");
//   } else {
//     console.log("not integer");
//   }
// }

// isInteger(12.7);

// function duplicateArray(arr) {
//   return [...arr, ...arr];
//   // return arr.concat(arr);
// }

// const arr = [3, 5, 4, 6, 7];

// console.log(duplicateArray(arr));

// function isPalindrome(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     newStr = str[i] + newStr;
//   }
//   if (str === newStr) {
//     return true;
//   }
//   return false;
// }
// console.log(isPalindrome("mom"));

// function reverseNumber(num) {
//   let rev = 0;
//   while (num > 0) {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   return rev;
// }

// console.log(reverseNumber(45));

// function sortString(str) {
//   let arr = [];

//   for (let i = 0; i < str.length; i++) {
//     arr[i] = str[i];
//   }

//   function sortedArr(arr) {
//     if (arr.length <= 1) return arr;

//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }

//     return [...sortedArr(left), pivot, ...sortedArr(right)];
//   }

//   arr = sortedArr(arr);

//   let sortedStr = "";
//   for (let i = 0; i < arr.length; i++) {
//     sortedStr += arr[i];
//   }

//   return sortedStr;
// }

// // Example usage
// console.log(sortString("react")); // Output: "acert"
// console.log(sortString("javascript")); // Output: "aacijprstv"

// function convertToCapital(str) {
//   let newStr = "";
//   newStr += str[0].toUpperCase();
//   for (let i = 1; i < str.length; i++) {
//     newStr += str[i];
//   }
//   return newStr;
// }
// console.log(convertToCapital("piyush"));

// function countChar(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (!obj[str[i]]) {
//       obj[str[i]] = 1;
//     } else {
//       obj[str[i]]++;
//     }
//   }
//   return obj;
// }

// console.log(countChar("apple"));

// function sum(arr) {
//   let total = 0;
//   for (value of arr) {
//     total += value;
//   }
//   return total;
// }

// console.log(sum([1, 3, 8, 9]));

// function onlyAddNumbers(arr) {
//   let sum = 0;
//   for (let value of arr) {
//     if (typeof value === "number") {
//       sum += value;
//     }
//   }
//   return sum;
// }

// console.log(onlyAddNumbers([1, "piyush", 2, "Jatin", 4]));

// function test(arr) {
//   let newArr = [];
//   arr.forEach((obj) => {
//     if (obj.gender === "male") {
//       newArr.push(obj);
//     }
//   });
//   return newArr;
// }

// console.log(
//   test([{ gender: "male" }, { gender: "male" }, { gender: "female" }])
// );

// function cloneArr(arr) {
//   let shallowCopy = [...arr];
//   console.log(shallowCopy);
// }

// cloneArr([3, 5, 7, 4, 2]);

// function typeOf(value) {
//   return typeof value;
// }

// console.log(typeOf(12));

// function firstNElem(arr = [], n = 1) {
//   if (n < arr.length + 1) {
//     for (let i = 0; i < n; i++) {
//       console.log(arr[i]);
//     }
//   } else {
//     console.log("fuck off");
//   }
// }

// firstNElem([1, 2, 3, 4, 5], 5);

// function lastNElem(arr = [], n = 1) {
//   if (n < arr.length + 1) {
//     for (let i = 0; i < n; i++) {
//       console.log(arr[arr.length - 1 - i]);
//     }
//   } else {
//     console.log("fuck off");
//   }
// }

// lastNElem([1, 2, 3, 4, 5], 5);

// function mode(arr) {
//   let mode = 0;
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (!obj[arr[i]]) {
//       obj[arr[i]] = 1;
//     } else {
//       obj[arr[i]]++;
//     }
//   }

//   for (let key in obj) {
//     if (obj[key] > mode) {
//       mode = key;
//     }
//   }
//   return mode;
// }

// console.log(mode([2, 2, 4, 5, 6, 7, 2]));

// function sortAndRemoveDuplicate(arr) {
//   let newArr = [];

//   function sortedArr(arr) {
//     if (arr.length <= 1) return arr;

//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }

//     return [...sortedArr(left), pivot, ...sortedArr(right)];
//   }

//   arr = sortedArr(arr);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(sortAndRemoveDuplicate([1, 4, 5, 5, 9, 3, 1, 7, 4]));

// let str = "abc";
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   let temp = "";
//   for (let j = i; j < str.length; j++) {
//     temp += str[j];
//     arr.push(temp);
//   }
// }

// console.log(arr);

// function fib(num) {
//   // if (num <= 0) return 0;
//   // else if (num === 1) return 1;
//   // else return fib(num - 1) + fib(num - 2);
//   let a = 0,
//     b = 1,
//     result;
//   for (let i = 2; i <= num; i++) {
//     result = a + b;
//     a = b;
//     b = result;
//     console.log(result);
//   }
//   return result;
// }

// console.log(fib(10));

// function subStr(str) {
//   let newStr = [];
//   for (let i = 0; i <= str.length - 1; i++) {
//     let temp = "";
//     for (let j = i; j <= str.length - 1; j++) {
//       temp += str[j];
//       newStr.push(temp);
//     }
//   }
//   console.log(newStr);
// }

// subStr("abc");

// function missingNo(arr) {
//   let n = arr.length;
//   let expSum = (n * (n + 1)) / 2;
//   let accSum = arr.reduce((acc, num) => acc + num, 0);
//   return accSum - expSum;
// }

// console.log(missingNo([1, 4, 3]));

// function firstNRC(str) {
//   let obj = {};
//   for (let char of str) {
//     if (!obj[char]) {
//       obj[char] = 1;
//     } else {
//       obj[char]++;
//     }
//   }

//   for (let char in obj) {
//     if (obj[char] === 1) {
//       return char;
//     }
//   }
// }

// console.log(firstNRC("leetcode"));

// function sl(arr) {
//   let fl = -Infinity;
//   let sl = -Infinity;
//   for (let num of arr) {
//     if (num > fl) {
//       fl = num;
//     }
//   }
//   for (let num of arr) {
//     if (num > sl && num !== fl) {
//       sl = num;
//     }
//   }
//   return sl;
// }

// console.log(sl([2, 5, 8, 7, 9])); // 8

// function longestSubStr(str) {
//   let newStr = [];
//   let temp = "";
//   for (let char of str) {
//     if (char !== " ") {
//       temp += char;
//     } else {
//       newStr.push(temp);
//       temp = "";
//     }
//   }

//   newStr.push(temp);

//   let longest = "";
//   for (let word of newStr) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// }

// console.log(longestSubStr("hii my name is piyush"));

// function subStr(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     let temp = "";
//     for (let j = i; j < str.length; j++) {
//       temp += str[j];
//       arr.push(temp);
//     }
//   }
//   return arr;
// }
// console.log(subStr("abc"));

// function flattenArray(arr) {
//   let newArr = [];
//   arr.forEach((elem) => {
//     if (Array.isArray(elem)) {
//       newArr.push(...flattenArray(elem));
//     } else {
//       newArr.push(elem);
//     }
//   });
//   return newArr;
// }

// const nestedArray = [1, [2, [3, [4]], 5]];
// console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5]
