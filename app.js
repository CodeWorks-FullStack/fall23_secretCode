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
const secretMessage = '🧀🍔🍲🧀🧇🍝🍕'
let userInput = ''

// !SECTION

// SECTION functions

// NOTE definition of the function
function selectCheese() {
  userInput += '🧀'
  console.log('Selected Cheese!', userInput);
}

function selectPizza() {
  userInput += '🍕'
  console.log('Selected Pizza!', userInput);
}

function selectShortcake() {
  userInput += '🍰'
  console.log('Selected Shortcake!', userInput);
}



// NOTE calls the function, tells the function to run
// selectCheese()

// const selectCheese = () => {

// }
// !SECTION