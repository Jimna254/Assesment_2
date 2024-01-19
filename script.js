// Given a string return a new string with the reversed order of character

const reversedString = (name) => {
  let revesedcharacters = name.split("").reverse().join();
  return revesedcharacters;
};

console.log(reversedString("James Kariuki"));
console.log(reversedString("Bad Man"));

//  write a function that count the number of vowels in a sentence

function countVowels(sentence) {
  let vowelCount = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence[i] === "a" ||
      sentence[i] === "e" ||
      sentence[i] === "i" ||
      sentence[i] === "o" ||
      sentence[i] === "u"
    ) {
      vowelCount++;
    }
  }
  if (vowelCount == 0) {
    console.log("There is no Vowels");
  }
  return `The Number Of Vowels Is ${vowelCount}`;
}
console.log(countVowels("This is my Event"));

//Using a Prompt allow user to enter numbers separated by commas then print the sum of the numbers

const readline = require("readline");
function calculateSum(inputString) {
  return new Promise((resolve, reject) => {
    let numbersArray = inputString.split(",");
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      let currentNumber = parseFloat(numbersArray[i]);
      if (!isNaN(currentNumber)) {
        sum += currentNumber;
      }
    }

    if (!isNaN(sum)) {
      resolve(sum);
    } else {
      reject("Invalid input. Please enter valid numbers separated by commas.");
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser() {
  return new Promise((resolve) => {
    rl.question("Enter numbers separated by commas: ", (userInput) => {
      resolve(userInput);
    });
  });
}

promptUser()
  .then((userInput) => {
    return calculateSum(userInput);
  })
  .then((result) => {
    console.log("Sum of the entered numbers:", result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    rl.close();
  });

//Write a program that checks whether a word is a palindrome or not.

function checkPalindromeAndLogError(word) {
  const lowercasedWord = word.toLowerCase();
  const cleanWord = lowercasedWord.replace(/[^a-z0-9]/g, "");
  const reversedWord = cleanWord.split("").reverse().join("");

  if (cleanWord === reversedWord) {
    console.log(`${word} is a palindrome.`);
  } else {
    console.error(`${word} is not a palindrome.`);
  }
}

checkPalindromeAndLogError("race car");
checkPalindromeAndLogError("hello");

//Given an array and chunk size divide the array into subarrays where each subarray is of length is the chunk size.
function chunkArray(arr, chunkSize) {
  if (!Array.isArray(arr) || !Number.isInteger(chunkSize) || chunkSize <= 0) {
    throw new Error(
      "Invalid input. Please provide a valid array and a positive integer as the chunk size."
    );
  }

  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }

  return result;
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkSize = 2;
const resultArray = chunkArray(myArray, chunkSize);
console.log(resultArray);

// Given an integer, return an integer that is reverse ordering the numbers

const reverser = (myInteger) => {
  let myIntStr = myInteger.toString();
  let reversedIntStr = myIntStr.split("").reverse().join("");
  let finalResult = parseInt(reversedIntStr);
  console.log(finalResult);
};
reverser(85);
