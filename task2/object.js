"use strict";
//1
let person = {
    name: "Adam",
    age: 25,
    gender: "Male"
};
console.log("name:",person.name);
console.log("age:",person.age);
console.log("gender:",person.gender);
//2 
person.occupation = "Software Engineer";
console.log(person);
//3
person["city"]="Jordan" ;
console.log(person);
//4
let namevalue = person.name ;
console.log(namevalue);
//5
let nameValue = person["name"];
console.log(nameValue);
//6
