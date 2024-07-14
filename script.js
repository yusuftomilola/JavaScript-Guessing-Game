// "use strict";

// // get html elements
// let message = document.querySelector(".message");
// const score = document.querySelector(".score");
// const inputNumber = document.querySelector(".number");
// const btnCheck = document.querySelector(".check");
// const highScore = document.querySelector(".highscore");
// const background = document.querySelector("body");
// const resetbtn = document.querySelector(".again");

// // Get secret random number
// let secretNumber = Math.floor(Math.random() * 20) + 1;

// // score number
// let scoreNumber = 20;

// function if_scoreGreatherThanZero(a) {
//   message.textContent = `Guess number too ${a}`;
//   scoreNumber--;
//   score.textContent = scoreNumber;
// }

// function else_scoreGreatherThanZero() {
//   message.textContent = "💥 You lost!";
//   score.textContent = 0;
//   background.style.backgroundColor = "red";
// }

// // event listener for button check
// btnCheck.addEventListener("click", () => {
//   const guessNumber = Number(document.querySelector(".guess").value);

//   //   when no input guess number
//   if (!guessNumber) {
//     message.textContent = "☹ Enter a number";
//   }

//   //when player wins and guesses the correct number
//   else if (guessNumber === secretNumber) {
//     message.textContent = "🎉 Correct Number";
//     inputNumber.textContent = secretNumber;

//     background.style.backgroundColor = "#60b347";

//     inputNumber.style.width = "200px";

//     highScore.textContent = guessNumber;
//   }

//   //when player guesses a number greater than the secret number
//   else if (guessNumber > secretNumber) {
//     if (scoreNumber > 1) {
//       if_scoreGreatherThanZero("high");
//     } else {
//       else_scoreGreatherThanZero();
//     }
//   }

//   //when player guesses a number lower than the secret number
//   else if (guessNumber < secretNumber) {
//     if (scoreNumber > 1) {
//       if_scoreGreatherThanZero("low");
//     } else {
//       else_scoreGreatherThanZero();
//     }
//   }
// });

// // event listener to reset the game and play again
// resetbtn.addEventListener("click", () => {
//   background.style.backgroundColor = "#222";
//   scoreNumber = 20;
//   secretNumber = Math.floor(Math.random() * 20) + 1;
//   score.textContent = 20;
//   highScore.textContent = 0;
//   document.querySelector(".guess").value = "";
//   message.textContent = "Start guessing...";
//   inputNumber.textContent = "?";
// });

//ARRAY METHODS

// [1] pop()
console.log("-----POP()------");
const names = ["yusuf", "tomilola", "falade", "akanni"];
const poppedName = names.pop();
console.log(names);
console.log(poppedName);
// Alternatives to pop:
// splice

// [2] push()
console.log("-----PUSH()------");
const states = ["kaduna", "Zaria", "kano"];
states.push("Abuja");
states.push(["lagos", "adamawa"]);
console.log(states);

// [3] Shift()
console.log("-----SHIFT()------");
const genders = ["male", "female", "transgender"];
const shiftedGender = genders.shift();
console.log(genders);
console.log(shiftedGender);

// [4] Unshift()
console.log("-----UNSHIFT()------");
const laptops = ["hp", "dell", "lenovo", "dell"];
laptops.unshift("Alienware");
console.log(laptops);

// [5] indexOf()
console.log("-----INDEXOF()------");
const myLaptops = ["hp", "dell", "lenovo", "dell"];
const indexOfMyLaptops = myLaptops.indexOf("dell");
console.log(indexOfMyLaptops);

// [6] lastIndexOf()
console.log("-----LASTINDEXOF()------");
const lastindexof = myLaptops.lastIndexOf("dell");
console.log(lastindexof);

// [7] includes()
console.log("-----INCLUDES()------");
const drinks = ["water", "coke", "fanta", "sprite"];
const includes = drinks.includes("fanta");
console.log(drinks);
console.log(includes);

// [8] reverse()
console.log("-----REVERSE()------");
drinks.reverse();
console.log(drinks);

// [9] Array.from()
console.log("-----ARRAY.FROM()------");
const newDrinks = Array.from(drinks);
console.log(newDrinks);

const hello = "hello there!";
const arrayFromHello = Array.from(hello);
console.log(arrayFromHello);

// [10] Array.of()
console.log("-----ARRAY.OF()------");
const colors = Array.of("red", "yellow", "black", 2, 5);
console.log(colors);

// [11] toString()
console.log("-----TOSTRING()------");
const ages = [23, 56, 11, 34, 44];
const toStringAges = ages.toString();
console.log(toStringAges);
console.log(typeof toStringAges);

// [12] join()
console.log("-----JOIN()------");
const loveYou = ["I", "Love", "You", "My", "Dear", "OloladeMi"];
const joinedLove = loveYou.join("..");
console.log(joinedLove);
console.log(typeof joinedLove);

// [13] slice()
console.log("-----SLICE()------");
const water = ["spring", "tap", "borehole", "bottle", "pure"];
const slicedWater = water.slice(2);
console.log(water);
console.log(slicedWater);

// [14] forEach()
console.log("-----FOREACH()------");
const waterTypes = ["spring", "tap", "borehole", "bottle", "pure", "tap"];

waterTypes.forEach((water, index, array) => {
  console.log(water);
  //   console.log(index);
  //   console.log(array);
});

// [15] find()
console.log("-----FIND()------");
const stringsWithLetterT = waterTypes.find((water) => water.includes("t"));

console.log(stringsWithLetterT);

//example 2
const fakeAges = [234, 456, 123, 456, 78, 890];
const findFakeAges = fakeAges.find((age) => age.toString().includes(8));
console.log(findFakeAges);

// [16]  findIndex()
console.log("-----FINDINDEX()------");
const findIndexWaterType = waterTypes.findIndex((water) => water === "tap");
console.log(findIndexWaterType);

const findIndexFakesAges = fakeAges.findIndex((age) =>
  age.toString().includes("2")
);
console.log(findIndexFakesAges);

// [17] some()
console.log("-----SOME()------");
const watches = ["belgium", "plastic", "silver", "gold"];
const someWatches = watches.some((watch, index, array) => watch.includes("z"));
console.log(someWatches);

// [18] every()
console.log("-----EVERY()------");
const everyWatches = watches.every((watch, index, array) => {
  //   console.log(watch);
  //   console.log(index);
  //   console.log(array);
  return watch.includes("l");
});

console.log(everyWatches);

// [19] filter()
console.log("-----FILTER()------");
const filteredWatches = watches.filter(
  (watch, index, array) => !watch.includes("e")
);

console.log(filteredWatches);

// [20] reduce()
console.log("-----REDUCE()------");
const hundreds = [100, 200, 300, 400, 500, 600];
const sumOfHundreds = hundreds.reduce((acc, val) => {
  return acc * val;
}, 1);
console.log(sumOfHundreds);

// [21] concat()
console.log("-----CONCAT()------");
const animals = ["dog", "cat", "frog", "cow"];
const nmbrs = [23, 12, 54, 67, 32];
const animalsAndNmbrs = animals.concat(
  nmbrs,
  hundreds,
  [9, 8, 7],
  [],
  [8],
  ["h"]
);
console.log(animalsAndNmbrs);

// [22] fill()
console.log("-----FILL()------");
const filledAnimals = animals.fill("Sheep", 1, 2);
console.log(filledAnimals);

// [23] flat()
console.log("-----FLAT()------");
const threeDeeArray = ["mango", "banana", ["pig", "tiger", ["benz", "camry"]]];
const flattedArray = threeDeeArray.flat(2);
console.log(flattedArray);

// [24] splice()
console.log("-----SPLICE()------");
const foodCombos = [
  "eba & butter",
  "indomie & spag",
  "spag & beans",
  "bread & egg",
  "potato & egusi",
  "rice & bread",
];

const deletedFoodCombos = foodCombos.splice(
  0,
  3,
  "Replacement-1",
  "Replacement-2",
  "Replacement-3",
  "Replacement-4",
  "Replacement-5"
);

console.log("Remaining Foods: ", foodCombos);
console.log("Deleted Foods: ", deletedFoodCombos);

//EXAMPLES
// [A] Iterating with Indices for Conditional Updates
// When you need to update array elements conditionally based on their indices, entries can be very helpful.
console.log("-----SPLICE() EXAMPLE 1------");

// [25] entries()
console.log("-----ENTRIES()------");
const eachFoodComboEntries = foodCombos.entries();

for (let food of eachFoodComboEntries) {
  console.log(food);
}

//EXAMPLES
// [A] Iterating with Indices for Conditional Updates
// When you need to update array elements conditionally based on their indices, entries can be very helpful.
console.log("-----ENTRIES() EXAMPLE 1------");

let numbers2 = [10, 20, 30, 40, 50];

const entriedNumbers = numbers2.entries();

for (let [index, value] of entriedNumbers) {
  if (index % 2 === 0) {
    numbers2[index] = value * 2;
  }
}

console.log(numbers2);

// [B] Creating an Indexed List for Display
// In UI applications, you might want to create a list where each item is prefixed with its index.
console.log("-----ENTRIES() EXAMPLE 2------");

let fruits2 = ["Apple", "Banana", "Cherry", "Date"];

let indexedFruits = fruits2.map(([index, fruit]) => `${index + 1}. ${fruit}`);

console.log(indexedFruits);

// [26] sort()
console.log("-----SORT()------");
const myNumbersOne = [34, 56, 22, 67, 89, 130, 12];
const myNumbersTwo = [34, 56, 22, 67, 89, 130, 12];

const myMusiciansOne = ["davido", "seyi vibez", "balloranking", "spyro"];
const myMusiciansTwo = ["davido", "seyi vibez", "balloranking", "spyro"];

//ascending - numbers
myNumbersOne.sort((a, b) => {
  return a - b;
});
//descending - numbers
myNumbersTwo.sort((a, b) => {
  return b - a;
});

console.log(myNumbersOne);
console.log(myNumbersTwo);

//ascending - strings
myMusiciansOne.sort((a, b) => {
  return a.localeCompare(b);
});

//descending - strings
myMusiciansTwo.sort((a, b) => {
  return b.localeCompare(a);
});

console.log(myMusiciansOne);
console.log(myMusiciansTwo);

//EXAMPLES
// [A] Sorting and Filtering Products by Price
// Scenario: You have an array of products, and you want to filter out products that are out of stock and sort the remaining products by price.
console.log("-----SORT() EXAMPLE 1------");
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
];

const availableProducts = products
  .filter((product) => product.inStock !== false)
  .sort((a, b) => {
    return a.price - b.price;
  });

console.log(availableProducts);

// [B] Sorting and Mapping Students by Grade
// Scenario: You have an array of students with their grades, and you want to sort them by their grades and then create an array of strings that includes their names and grades.
console.log("-----SORT() EXAMPLE 2------");

const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 88 },
  { name: "David", grade: 75 },
];

const sortedStudents = students
  .sort((a, b) => {
    return a.grade - b.grade;
  })
  .map((student) => `${student.name}: ${student.grade}`);

console.log(sortedStudents);

// [C] Sorting and Reducing Sales Data by Month
// Scenario: You have an array of sales data, and you want to sort the sales by month and then calculate the total sales.
console.log("-----SORT() EXAMPLE 3------");

const sales = [
  { month: "January", amount: 1000 },
  { month: "March", amount: 1500 },
  { month: "February", amount: 1200 },
];

const monthsOrder = ["January", "February", "March"];

const totalSales = sales.reduce((total, sale) => {
  return total + sale.amount;
}, 0);
console.log(totalSales);

// [D] Sorting and Finding the Highest Value Transaction
// Scenario: You have an array of transactions, and you want to sort them by amount and find the highest value transaction.
console.log("-----SORT() EXAMPLE 4------");

const transactions = [
  { id: 1, amount: 250 },
  { id: 2, amount: 450 },
  { id: 3, amount: 120 },
  { id: 4, amount: 300 },
];

const sortedHighestTransaction = transactions
  .sort((a, b) => {
    return b.amount - a.amount;
  })
  .find((transaction) => transaction);

console.log(sortedHighestTransaction);

// [E] Sorting and Finding the Highest Value Transaction
// Scenario: You have an array of transactions, and you want to sort them by amount and find the highest value transaction.
console.log("-----SORT() EXAMPLE 5------");

const events = [
  { title: "Conference", date: "2023-06-15" },
  { title: "Workshop", date: "2022-09-10" },
  { title: "Meetup", date: "2023-01-20" },
  { title: "Webinar", date: "2022-12-05" },
];

const sortedEvents = events.sort((a, b) => {
  return new Date(a.date) - new Date(b.date);
});

const groupedEvents = sortedEvents.reduce((grouped, event) => {
  const year = new Date(event.date).getFullYear();

  if (!grouped[year]) {
    grouped[year] = [];
  }

  grouped[year].push(event);

  return grouped;
}, {});

console.log(groupedEvents);

// [27] copyWithin()
console.log("-----COPYWITHIN()------");
const CTA = ["You", "Must", "Buy", "This", "Product", "Now", "Today!"];

CTA.copyWithin(3, 5, 7);
CTA.copyWithin();
console.log(CTA);

//EXAMPLES
// [A] Rearranging Elements in a Game Board
console.log("-----COPYWITHIN() EXAMPLE 1------");
let board = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let flattenedBoard = board.flat(1);
flattenedBoard.copyWithin(12, 0, 4);
console.log(flattenedBoard);

board = [
  flattenedBoard.slice(4, 8),
  flattenedBoard.slice(8, 12),
  flattenedBoard.slice(12, 16),
];

console.log(board);

// [B] Shuffling Elements
// Shuffling elements within a certain range of an array.
console.log("-----COPYWITHIN() EXAMPLE 2------");

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array2.copyWithin(0, 5);
console.log(array2);
