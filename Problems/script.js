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
//   arr = arr.sort((a,b) => a-b)
//   const index = arr.length/2
//  return index%2 === 0 ? (arr[index] + arr[index-1])/2 : arr[Math.floor(index)]
// }

// console.log(median([1,5,7,8]))

// function mode (arr) {
//   let count = {}
//   let max = 0
//   let mode = []
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

// function repeatString (str, iteration ) {
//   let newStr = str.trim()
//   for(let i=1; i<iteration; i++){
//     newStr += str
//   }
//   return newStr
// }

// console.log( repeatString("Abc", 3) )

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
