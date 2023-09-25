// NOTE creates a group of your console logs, ends the section by calling console.groupEnd()
console.group('examples')

console.log('javascript is working!')

// SECTION strings

// NOTE let creates a variable that's value can change
let firstName = 'Jeremy'
// NOTE const creates a variable that's value cannot change
const lastName = 'Fowler'

// NOTE outdated way to declare variables
var middleName = 'Bob'


firstName = 'Jerms'

// NOTE double-quotes can be used to create strings containing single quotes
const catchPhrase = "How you doin' "

// NOTE backticks can be used to create strings containing single quotes and double quotes
const extendedCatchPhrase = `How you doin' "darlin"`

// NOTE throws error, lastame is a constant
// lastName = 'CatDaddy'

// NOTE string concatenation adds strings together
console.log('My name is ' + firstName + ' ' + middleName + ' ' + lastName + '!');

// NOTE string interpolation injects values inside of strings, must use backticks and ${} to interpolate
console.log(`My name is ${firstName} ${middleName} ${lastName}!`)

// !SECTION

// SECTION boolean

// NOTE different casing examples. camelCase is the standard for js
// let PascalCase = ''
// let snake_case = ''

let jeremyLikesCats = true

let jeremyLikesTomatoes = false



if (jeremyLikesCats) {
  console.log('💘 🐈🐈🐈🐈🐈🐈🐈');
}

// Note this functions exactly the same as the code above
if (jeremyLikesCats == true) {
  console.log('💘 🐈🐈🐈🐈🐈🐈🐈');
}

if (jeremyLikesTomatoes) {
  console.log('💘 🍅');
}
// NOTE else will run if the above if statement evaluates to false
else {
  console.log('⚔️ 🍅');
}


// NOTE this evaluates to true
// @ts-ignore
if (2 == '2') {
  console.log('js is weird');
}

// NOTE this fails because the data types do not match
// @ts-ignore
if (2 === '2') {
  console.log('js is weird');
}

// !SECTION

// SECTION numbers

const num1 = 5

let num2 = 5

num2 = num1 + num2

num2 += num1

// NOTE just does math, does not change any values
num2 + num1

num2 /= 2

num2 *= 10

// NOTE review PEMDAS, or order of operations
num2 = (num2 + 25) / 2

console.log(`Here is the value of num2: ${num2}`);

console.groupEnd()

// ANCHOR application code starts here

// SECTION global variables
// NOTE these variables are accessible throughout all of the code
const secretMessage = '🧀🍔🍲'

// NOTE sets up a placeholder string that we can add characters to
let userInput = ''

// !SECTION

// SECTION functions

// NOTE definition of the function
function selectCheese() {
  // NOTE concats this string to the userInput string
  userInput += '🧀'
  console.log('Selected Cheese!', userInput);
  const userInputElement = document.getElementById('currentUserInput')
  userInputElement.innerText = userInput
}

// NOTE calls the function, tells the function to run
// selectCheese()

function selectPizza() {
  userInput += '🍕'
  console.log('Selected Pizza!', userInput);
  // NOTE the selectPizza function calls the updateUserInput function, functions can call other functions
  updateUserInput()
}

function selectShortcake() {
  userInput += '🍰'
  console.log('Selected Shortcake!', userInput);
  updateUserInput()
}

// NOTE this function has a parameter, and it's value will be assigned when the function is called, check the HTML to see an example of an argument. If no argument is supllied when this function is called, foodItem will be undefined
function selectFoodItem(foodItem) {
  userInput += foodItem
  console.log('Selected Food Item!', userInput);
  updateUserInput()
}

function updateUserInput() {
  // NOTE grabs a piece of HTML from the DOM with id of 'currentUserInput'
  // NOTE if no HTML element has the supplied id, it will return null
  const userInputElement = document.getElementById('currentUserInput')
  // NOTE changes the text inside of the HTML element
  userInputElement.innerText = userInput
}

function checkUserInputAgainstSecretCode() {
  // NOTE this re-assigns the variable, make sure you use the correct amount of "="
  // if (userInput = secretMessage) {
  if (userInput == secretMessage) {
    console.log('you got the secret code!');
    const secretImageElement = document.getElementById('secretImage')

    // NOTE sets the HTML to this string of HTML in javascript
    secretImageElement.innerHTML = '<img src="https://media1.giphy.com/media/Zu6AATBpCeUzm/giphy.webp?cid=ecf05e4703y5m1bzhvqjwqopyjs157ug8l2aaj3ra59yojoo&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="secret image">'
  }
  else {
    console.log('you are so dumb!');
    // NOTE window targets the web browser, and the alert function has a tiny alert window pop up with our supplied text
    window.alert('YOU ARE THE DUMBEST LITTLE DOGGY EVER')
    // NOTE resets the string
    userInput = ''
    updateUserInput()
  }
}



// const selectCheese = () => {

// }

// !SECTION

// REVIEW truthy falsy in javascript
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

let emptyString = '' // falsy
let char = 'b' // truthy
let num3 = -1 // truthy
let num4 = 0 // falsy
let weird; // undefined, falsy


// if (weird) {
//   console.log('truthy');
// }
// else {
//   console.log('falsy');
// }