"use strict";
//1
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
//2
let numbers = [1,2,3,4,5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
//3
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
//4
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
//5
function findLargestNumber(arr) {
    let largest = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let Input= [1, 2, 3, 4, 5];;
let largestNumber = findLargestNumber(numbers);
console.log(largestNumber); // Output: 9
//6
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return average;
}

let numbers1 = [1,2,3,4,5];
let average = findAverage(numbers);
console.log(average);
//7
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
let number = 5;
let factorialOfNumber = factorial(number);
console.log(factorialOfNumber);
//8
function printFibonacciSequence(limit) {
    let a = 0, b = 1;
    let fibonacciSequence = [a, b];
    
    for (let i = 2; i <= limit; i++) {
        let next = a + b;
        fibonacciSequence.push(next);
        a = b;
        b = next;
    }
    
    return fibonacciSequence;
}
let limit = 10;
let fibonacciSequence = printFibonacciSequence(limit);
console.log(fibonacciSequence); 
//9
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}
let limit1 = 20;
printPrimes(limit1);
//10 
