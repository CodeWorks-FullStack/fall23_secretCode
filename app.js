console.group('examples')

console.log('javascript is working!')

// SECTION strings

let firstName = 'Jeremy'

// NOTE outdated way to declare variables
var middleName = 'Bob'

const lastName = 'Fowler'

firstName = 'Jerms'

const catchPhrase = `How you doin' "darlin"`

// throws error
// lastName = 'CatDaddy'

console.log('My name is ' + firstName + ' ' + middleName + ' ' + lastName + '!');

console.log(`My name is ${firstName} ${middleName} ${lastName}!`)

// !SECTION

// SECTION boolean

// let PascalCase = ''
// let snake_case = ''

let jeremyLikesCats = true

let jeremyLikesTomatoes = false

if (jeremyLikesCats == true) {
  console.log('💘 🐈🐈🐈🐈🐈🐈🐈');
}

if (jeremyLikesCats) {
  console.log('💘 🐈🐈🐈🐈🐈🐈🐈');
}

if (jeremyLikesTomatoes) {
  console.log('💘 🍅');
}
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

num2 = (num2 + 25) / 2

console.log(`Here is the value of num2: ${num2}`);

console.groupEnd()


// SECTION global variables
const secretMessage = '🧀🍔🍲'

let userInput = ''

// !SECTION

// SECTION functions

// NOTE definition of the function
function selectCheese() {
  userInput += '🧀'
  console.log('Selected Cheese!', userInput);
  const userInputElement = document.getElementById('currentUserInput')
  userInputElement.innerText = userInput
}

function selectPizza() {
  userInput += '🍕'
  console.log('Selected Pizza!', userInput);
  updateUserInput()
}

function selectShortcake() {
  userInput += '🍰'
  console.log('Selected Shortcake!', userInput);
  updateUserInput()
}

function selectFoodItem(foodItem) {
  userInput += foodItem
  console.log('Selected Food Item!', userInput);
  updateUserInput()
}

function updateUserInput() {
  const userInputElement = document.getElementById('currentUserInput')
  userInputElement.innerText = userInput
}

function checkUserInputAgainstSecretCode() {
  if (userInput == secretMessage) {
    console.log('you got the secret code!');
    const secretImageElement = document.getElementById('secretImage')

    secretImageElement.innerHTML = '<img src="https://media1.giphy.com/media/Zu6AATBpCeUzm/giphy.webp?cid=ecf05e4703y5m1bzhvqjwqopyjs157ug8l2aaj3ra59yojoo&ep=v1_gifs_search&rid=giphy.webp&ct=g" alt="secret image">'
  }
  else {
    console.log('you are so dumb!');
    window.alert('YOU ARE THE DUMBEST LITTLE DOGGY EVER')
    userInput = ''
    updateUserInput()
  }
}

// NOTE calls the function, tells the function to run
// selectCheese()

// const selectCheese = () => {

// }

// !SECTION


// let emptyString = ''
// let zero = -1
// let weird;

// if (weird) {
//   console.log('truthy');
// }
// else {
//   console.log('falsey');
// }