/*
String Manipulation Functions:

Reverse a String: Write a function that reverses a given string.
Count Characters: Create a function that counts the number of characters in a string.
Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
Array Functions:

Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
Sum of Array: Create a function that calculates the sum of all elements in an array.
Filter Array: Implement a function that filters out elements from an array based on a given condition.
Mathematical Functions:

Factorial: Write a function to calculate the factorial of a given number.
Prime Number Check: Create a function to check if a number is prime or not.
Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
*/

//Strings
//Reverse a String: Write a function that reverses a given string.

const reverser = (string) => {

    return string.split(" ").reverse().join(" ");
}

console.log("Bumblebee");
//Count Characters: Create a function that counts the number of characters in a string.

function characterCounter (string) {
        return string.length;
}

console.log(characterCounter("Bumblebee"));
//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function Capitalizer (sentence){
 
    return sentence.split("").map(word => word.charAt(0).toUpperCase + word.slice(1)).join(" ");
}

console.log(Capitalizer("Bumblebees do a lot of work"));

//Arrays
//Max and Min
const numbers = [1,2,3,44,5,100];


const Max = (arr) => {
    return Math.max(...arr);
}
const Min = (arr) => {
    return Math.min(...arr);
}

const findMinMax = (arr) => {
    console.log(`${Max(arr)}, ${Min(arr)}`)  
}

findMinMax(numbers)

//Sum of array
var sum = 0;
for (i in numbers){
    sum += numbers[i]
}

console.log(sum);

//Filter Array: Implement a function that filters out elements from an array based on a given condition.
//Example
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example condition function to filter even numbers
function isEven(num) {
    return num % 2 === 0;
}

console.log(filterArray([1, 2, 3, 4, 5], isEven)); // Output: [2, 4]

//Answer
const filteredArray = (array, condition) => {

    return array.filter(condition);
 }

 var condition = (num) => {
    return num < 50;
 }

 console.log(filteredArray(numbers,condition));

 //Factorial: Write a function to calculate the factorial of a given number.

 function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));

//Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(11));


//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

function fibonacci(n) {
    if (n <= 1) {
        return [0, 1].slice(0, n + 1);
    } else {
        let fibSeq = fibonacci(n - 1);
        fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
        return fibSeq;
    }
}

console.log(fibonacci(5)); 