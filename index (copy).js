// Q1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Q1: Part A - subtract the value of the first element from the value in the last element. 
let lastIndex = ages.length - 1;
let result = ages[lastIndex] - ages[0]; // 93 - 3 = 90
console.log("Result: ", result);

// Q2: Part B - add a new age to array and repeat the same steps. 
let newAge = 16;
ages.push(newAge);

lastIndex = ages.length - 1;
result = ages[lastIndex] - ages[0]; // 16 - 3 = 13 
console.log("Updated Result: ", result);

// Q3: Part C - loop to iterate and calculate the average age.
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
let avg = sum / ages.length;
console.log("Average Age: ", avg);

// Q2: Create an array called names that contains: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// Q2: Part A - loop to iterate and calculate the average number of letters per name.
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
let avgLetters = totalLetters / names.length;
console.log("Average letters per name: ", avgLetters);
// Q2: Part B - loop to iterate and concatenate all the names together, seperated by spaces. 
let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i]; // concatenate each name 
  if (i !== names.length - 1) {
    concatenatedNames += " "; // add a space except for the last name 
  }
}
console.log("Concatenated names:", concatenatedNames);

/* Q3/Q4: How do you access the last element and first element of any array? 
  Using the length property method. There are other methods you can use, but for now this one is ok. */

//Q5: Create a new array called nameLengths, write a loop over the previously names and add the length. 
names.push('Kelly', 'Sam', 'Kate');
console.log("Updated Names: " + names);

let namesLength = [];
for (i = 0; i < names.length; i++) {
  namesLength.push(names[i].length);
}
console.log(namesLength);

//Q6: write a loop over namesLength array and calculate the sum of all the elements 
var total = 0;
for (i = 0; i < namesLength.length; i++) {
  total += namesLength[i];
}
console.log(total);

//Q7: Write a function that takes two params, word and n, as arguments and return the word concatenated to itself n number of times. 
function concatenate(word, n) {
  console.log(word.repeat(n))
}
concatenate("hello", 3)

//Q8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName)
}
fullName("Candace", "Samuels")

//Q9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function arrayOfNumbers(array1) {
  for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
  }
  if (sum > 100) {
    console.log(true)
  } else {
    console.log(false)
  }
}
arrayOfNumbers([3, 9, 23, 64, 2, 8, 28, 93])

//10: Write a function that takes an array of numbers and returns the average of all the elements in the array.
function theAverageOfTheArray(array) {
  var sum = 0;
  var count = array.length
  for (i = 0; i < count; i++) {
    sum += array[i];
  }
  console.log(sum / count);
}
theAverageOfTheArray([11, 20, 4, 5, 3, 98, 84])

//Q11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function difference(array1, array2) {
  var sum1 = 0;
  var count = array1.length
  for (i = 0; i < count; i++) {
    sum1 += array1[i];
  }
  var sum2 = 0;
  var count = array2.length
  for (i = 0; i < count; i++) {
    sum2 += array2[i];
  }
  if (sum1 > sum2) {
    console.log(true)
  } else {
    console.log(false)
  }
}
difference([3, 45, 21, 564, 4543, 423], [32, 98, 64, 3, 2, 9])

//Q12: Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside === true && moneyInPocket >= 10.50) {
    console.log(true)
  } else {
    console.log(false)
  }
}
willBuyDrink(true, 5.00)

//Q13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it. I created a function that would display a simple welcome alert when you log into class. 

function welcomeAlert(name) {
  return ("Hello " + name + " welcome back to class!");
}
let name = "Jeff";
console.log(welcomeAlert(name));

