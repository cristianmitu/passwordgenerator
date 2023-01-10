// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let userChoice = [];
let passLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  // Reset the userChoice array every time we press the generate password buuton
  userChoice = [];
  //convert user input from prompt box (which is a string) to an integer number
  passLength = parseInt(prompt("How many characters do you want your password have (10 - 64) ? "));
  //if user input is not a number return false and display the message and the function breaks
  if (isNaN(passLength) || passLength < 10 || passLength > 64) {
    alert("Please enter a number from 10 to 64 ! ");
    return false;
  }
  // what type of characters does the user want to include in his password
  if (confirm("Do you want to include special characters in your password")) {
    userChoice = userChoice.concat(specialCharacters);
  }
  if (confirm("Do you want to include numeric characters in your password")) {
    userChoice = userChoice.concat(numericCharacters);
  }
  if (
    confirm("Do you want to include lower cased characters in your password")
  ) {
    userChoice = userChoice.concat(lowerCasedCharacters);
  }
  if (
    confirm("Do you want to include upper cased characters in your password")
  ) {
    userChoice = userChoice.concat(upperCasedCharacters);
  }
  return true;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let index = Math.floor(Math.random() * arr.length);
  let randomChar = arr[index];
  return randomChar;
}

// Function to generate password with user input
function generatePassword() {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    password = password + getRandom(userChoice);
    
  }return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector('#password');
  if (getPasswordOptions()){
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  }else{
    passwordText.value = "";    
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);