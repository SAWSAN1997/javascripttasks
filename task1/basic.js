"use strict";
//Cash flow ratio

const cash = 1000;
const currentLiabilities = 500;
const ratio = cash / currentLiabilities;

console.log(ratio);

//Net income

const revenues = 1000;
const expenses = 500;
const netincome = revenues - expenses;
console.log(netincome);

//Total assets

const liabilities = 1000;
const equity = 500;
const total = liabilities + equity;
console.log(total);
//net income using margin

const sales = 500;
const profitMargin = 1000;
const netIncome = sales * profitMargin;

console.log(netIncome);
// average
const num1 = 7;
const num2 = 9;
const num3 = 2;
const average = (num1 + num2 + num3) / 3;
console.log(average);
//discount
const price = 150;
const discount = 30;
const Discount = 150 - price * (discount / 100);
console.log(Discount);
// age limit
function isValidAge(age) {
  return age > 18 && age < 30;
}
console.log(isValidAge(20));
// exponential
function exponential(base, expo) {
  return base ** expo;
}
const base = 1;
const expo = 2;
const result = exponential(base, expo);
console.log(result);
const base2 = 2;
const expo2 = 3;
const result2 = exponential(base2, expo2);
console.log(result2);
//reminder
const number1 = 2;
const number2 = 4;
const remainder = number1 % number2;
console.log(remainder);
//type of
console.log(typeof 100);
console.log(typeof 73.9);
console.log(typeof NaN);
console.log(typeof "Water");
console.log(typeof false);
console.log(typeof 9 != 11);
console.log("Orang" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log("4" - "8");
console.log("name" + 3);
console.log("name" - 3);
console.log(82 * "word");
console.log(1 + "hello");
console.log("hello" + 1);
console.log(1 + true);
console.log("hello" + true);
console.log(typeof Infinity);
console.log(1 == "1");
console.log(1 === "1");
//string1
const str = "welcome to orange";
console.log(str.toUpperCase());
console.log(str.substring(8, 10));
console.log(str.replace("welcome", "hello"));
console.log(str.length);
console.log(str + " jordan");
//string2
const string = "cactus";
console.log(string.replace(string[3], "*"));
//array1
let array = ["Coding", "Academy", "By", "Orange"];
array.push("Jordan");
console.log(array);
let array2 = array.slice(0, 2);
console.log(array2);
let array3 = ["Coding", "Academy", "By", "Orange"];
let array4 = ["welcome", "to", array3];
console.log(array4);
let array5 = array3.slice(1);
console.log("array 5 =", array5);
let stringout = array3.join("");
console.log(stringout);
let array6 = [array3[0], array3[array3.length - 1]];
console.log(array6);
//array2
let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];
let vegetables1 = vegetables.pop();
console.log(vegetables);
let fruit1 = fruit.shift();
console.log(fruit);
let fruit2 = ["banana", "apple", "orange", "watermelon"];
let indexorange = fruit2.indexOf("orange");
console.log(indexorange);
fruit2.push(indexorange);
console.log(fruit2);
let veglenght = vegetables.length;
console.log(veglenght);
vegetables.push(veglenght);
console.log(vegetables);
let fruit3 = ["banana", "apple", "orange", "watermelon"];
let vegetables3 = ["carrot", "tomato", "pepper", "lettuce"];
let food = fruit3.concat(vegetables3);
console.log(food);
food.splice(4, 2);
console.log(food);
food.reverse();
console.log(food);
let foodstring = food.join(",");
console.log(foodstring);
//Conditionals1
let age = 20;
if ((age = 30)) {
  console.log("You are not eligible. You may join other programs.");
} else if (age < 18 && age < 30) {
  console.log("You are eligible. Start your application.");
} else if (age > 60) {
  console.log("You may join the seniors program.");
} else {
  console.log("You may join the kids' program.");
}
//Conditionals2
function switchCase(input) {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}
const sampleInput = "OrAnGe";
const sampleOutput = switchCase(sampleInput);

console.log(sampleOutput);
//Conditionals4
function removeElement(array, element) {
  return array.filter((item) => item !== element);
}

const cabo = ["Coding", "Academy", "By", "Orange"];
const result1 = removeElement(cabo, "By");
console.log(result1);
//Conditionals5
function isOddOrEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
  }
  const oddnumber = 5;
  console.log(isOddOrEven(oddnumber));
//Conditionals6
function isNumber(input) {
  return typeof input === "number" && !isNaN(input);
}
const input = "123";
console.log(isNumber(input));
//Conditionals7
function findLargest(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
const one = 10;
const two = 15;
console.log(findLargest(one, two));
//loops1