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
const joinedLove = loveYou.join(" ");
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
