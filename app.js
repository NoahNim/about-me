// JS file for Feb 9 class demo

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);

alert("Hi there, " + userName + "I'm going to ask you some questions about some questions about me please answer Y or N.")

var answer1 = prompt('Was Sam born in South Dakota?')

if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'N'){
  alert('Nice! I was born in Germany')
} else if (answer1 = 'Y'){
  alert('Sorry you are wrong!')
} else {
  alert ("You should have given a Y or N answer")
}
