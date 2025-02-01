"use strict ";
//1
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});
//2
let arraynumber = [1, 2, 3, 4, 5];
let newnumber = arraynumber.map(function (number) {
  return number * 2;
});
console.log(newnumber);
//3
let evennumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evennumbers);
//4
let sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);
//5
let fruits = ["apple", "banana", "cherry"];
fruits.sort();
console.log(fruits);
//6
fruits.reverse();
console.log(fruits);
//7
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let concatnum = numbers1.concat(numbers2);
console.log(concatnum);
//8
let num = [1, 2, 3, 4, 5, 6];
let slicenum = num.slice(3, 4);
console.log(slicenum);
//9
let input = [1, 2, 3, 4, 5];
let sli = input.slice(2, 2);
console.log(sli);
//10
let numbe = [1, 2, 3, 4, 5];
let ind = numbe.indexOf(4);
console.log(ind);
//11
let numb = [1, 2, 3, 4, 5];
let numbstring = numb.join(",");
console.log(numbstring);
//12
let string = "1,2,3,4,5";
let convertstring = string.split("");
console.log(convertstring);
//13
let array7 = [1, 2, 3, 4, 5];
let array7l = array7.length;
console.log(array7l);
//14
let inp = [1, 2, 3, 4, 5];
for (let number of input) {
  console.log(number);
}
//15
let fruits5 = ["banana", "apple", "orange", "watermelon", "grape"];
for (let index in fruits5) {
  console.log(index);
  console.log(fruits5[index]);
}
//16
let cars = ["bmw", "hyndai", "mercedes"];
let carsstring = "this is a string";
console.log(Array.isArray(cars));
console.log(Array.isArray(carsstring));
//17
let names = Array.of("sawsan", "heba", "adeba");
console.log(names);
