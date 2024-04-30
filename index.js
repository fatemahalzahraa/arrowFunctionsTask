// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

// Q2) Write a simple arrow function that takes two parameters and returns their sum.

// Q3) Write a simple arrow function that squares a number.

//Q1
let greet = (name) => {
   return (`Hello, ${name}`)

}
console.log(greet("fatemah"))

//Q2
const sum = (num1,num2) => {
    return num1+num2
}
console.log(sum(4,4))

//Q3

const square = (number) => {
    return number*number

}
console.log (square(9))

// Q4) [🌶️🌶️] Create an arrow function that takes an array 
//of numbers and returns a new array with each number squared.

const squared = (numbers) => {
    return numbers.map ((num) => {
        return (num**2)
    }
    )
}
console.log(squared([2,3,4])) 