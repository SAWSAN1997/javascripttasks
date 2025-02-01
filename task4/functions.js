"use strict";
//1
function findsmallestvalue(array) {
  if (array.lenght === 0) {
    return "array is empty";
  }
  let smallest = array[0];
  for (let i = 1; i < array.lenght; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
}
let numbers = [30, 45, 60, 7];
let smallestValue = findsmallestvalue(numbers);
console.log(smallestValue);
//2
function sortStringAlphabetically(str) {
  let charArray = str.split("");
  charArray.sort();
  return charArray.join("");
}
let inputString = "hello";
let sortedString = sortStringAlphabetically(inputString);
console.log(sortedString);
//3
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(8));
//4
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
let number = 9;
let result = checkEvenOrOdd(number);
console.log(`The number ${number} is ${result}.`);
//5
function addUp(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
let number1 = 8;
let result1 = addUp(number1);
console.log(result1);
//6
function analyzeArray(arr) {
  if (arr.length === 0) {
    return "Array is empty";
  }

  let lowest = Math.min(...arr);
  let highest = Math.max(...arr);
  let length = arr.length;
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  let average = sum / length;

  let result = [lowest, highest, length, average];

  return result;
}
let numbers5 = [7, 13, 3, 77, 100];
let analysisResult = analyzeArray(numbers5);
console.log(analysisResult);
//7
function countWords(str) {
  let wordsArray = str.trim().split(/\s+/);
  return wordsArray.length;
}
let sentence = "hello from codingacademy!";
let wordCount = countWords(sentence);
console.log(`The number of words in the sentence is: ${wordCount}`);
//8
function multiplyByLength(arr) {
  let length = arr.length;
  let result = arr.map(function (element) {
    return element * length;
  });
  return result;
}
let numbers8 = [4, 2, 5];
let multipliedArray = multiplyByLength(numbers8);
console.log(multipliedArray);
//9
function endsWith(str1, str2) {
  let str1Length = str1.length;
  let str2Length = str2.length;
  if (str1.slice(-str2Length) === str2) {
    return true;
  } else {
    return false;
  }
}

let string1 = "CodingSchool";
let string2 = "Ac";
let result3 = endsWith(string1, string2);
console.log(result3);
