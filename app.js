JS file for Feb 9 class demo

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName);

alert("Hi there, " + userName + "I'm going to ask you some questions about some questions about me please answer Y or N.");

var answer1 = prompt('Was Noah born in Maryland?');

if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'N'){
  alert('Nice! I was born on the planet THIS HAS BEEN CLASSIFIED FOR NATIONAL SECUIRTY REASONS THANK YOU CITIZEN');
  console.log('answered correctly the code also ran')
} else if (answer1.toLowerCase() === 'Y' || answer1.toUpperCase() === 'Y'){
  alert('Sorry you are wrong!');
  console.log('answered wrong code did run');
} else {
  alert ('YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ');
  console.log('did not use a valid answer the code ran');
}

var answer2 = prompt('Does Noah want to rule the galaxy?');

if (answer2.toLowerCase() === 'n' || answer2.toUpperCase() === 'N'){
  alert('Wrong actually have a strange desire to....');
  console.log('answered wrong code did run');
} else if (answer2.toLowerCase() === 'Y' || answer2.toUpperCase() === 'Y'){
  alert('Yes that is right...um...do not tell anyone please ;)');
  console.log('answered correctly the code also ran');
} else {
  alert ('YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ');
  console.log('did not use a valid answer the code ran');
}

var answer3 = prompt('Does Noah play guitar');

if (answer3.toLowerCase() === 'n' || answer3.toUpperCase() === 'N'){
  alert('Wrong I DO PLAY! Why do you hate me? D: D: D: :( ;_;');
  console.log('answered wrong code did run');
} else if (answer3.toLowerCase() === 'Y' || answer3.toUpperCase() === 'Y'){
  alert('Yes that is right! You must have a degree in something');
  console.log('answered correctly the code also ran');
} else {
  alert ('YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ');
  console.log('did not use a valid answer the code ran');
}

var answer4 = prompt('Do I have any experience?');

if (answer4.toLowerCase() === 'n' || answer4.toUpperCase() === 'N'){
  alert('You know me too well...that may be a problem');
  console.log('answered right code did run');
} else if (answer4.toLowerCase() === 'Y' || answer4.toUpperCase() === 'Y'){
  alert('Yes that is right HAHA JUST KIDDING YOU WERE WRONG HAHAHAHA WRONG WRONG WRONG!');
  console.log('answered wong the code also ran');
} else {
  alert ('YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ');
  console.log('did not use a valid answer the code ran');
}

var answer5 = prompt('Do I have a past?');

if (answer5.toLowerCase() === 'n' || answer5.toUpperCase() === 'N'){
  alert('If only one could undo the past..fix old mistakes. You made a mistake. You were wrong. HAHAHAHA');
  console.log('answered wrong code did run');
} else if (answer5.toLowerCase() === 'Y' || answer5.toUpperCase() === 'Y'){
  alert('Yes that is right! Um how much exactly do you know?');
  console.log('answered correctly the code also ran');
} else {
  alert ('YOU SHOULD HAVE GIVEN A Y OR N ANSWER WTF IS WRONG WITH YOU LEARN TO READ');
  console.log('did not use a valid answer the code ran');
}

var guesses = 0;

while (guesses < 3){
  var answer6 = parseInt(prompt('How old am I? You have four guesses', "0"))
  if (answer6 === 25){
    alert('That is right! You can read!');
    console.log('Answered correctly while loop should end');
    guesses = 3
  } else if (answer6 > 25){
    guesses += 1
    alert('WRONG! Guess again! Too high!');
    console.log(guesses + ' guess used');
  }  else {
    guesses += 1
    alert('Wrong! Too low!');
    console.log(guesses + ' guess used');
  }
}
