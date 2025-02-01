"use strict";
//1
let person = { name: "Adam", age: 25, gender: "male" };
let keyperson = Object.keys(person);
console.log(keyperson);
//2
let valueperson = Object.values(person);
console.log(valueperson);
//3
let both = Object.entries(person);
console.log(both);
//4
let obj1 = { name: "Adam", age: 25 };
let obj2 = { gender: "male" };
let mergedobject = Object.assign({}, obj1, obj2);
console.log(mergedobject);
//5
let person2 = {
  name: "John",
  age: 30,
  profession: "Engineer",
  country: "USA",
};
Object.freeze(person2);
console.log(person2);
