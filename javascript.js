//Remember, we're gonna use strict mode in all scripts now!  This helps catch errors too in the console.log of browser.
"use strict";

//How to setup a separate desktop for Mac

// put score to zero score--0 or score--1 id.  array?
const player0El = document.querySelector('player--0');
const player1El = document.querySelector('player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');

const scores = [0, 0];
let currentscore = 0;
let score1 = 0;
let activePlayer = 0;
let playing = true; // game state variable is common in programming


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//call this function at beginning to make sure it's a clean start everytime.  Remember scoping is important when doing this.  variables will only be available in that function.
const init = function () {
	//put new game btn function here
}

init();

const switchPlayer = function() {
		currentscore = 0;
		activePlayer = activePlayer === 0 ? 1 : 0;
		//toggle will add the class if there or remove if not
		player0El.classList.toggle('player--active');
		player1El.classList.toggle('player--active');
}

//Rolling dice function.
btnRoll.addEventListener('click', function() {
if(playing) {
	//Generating a random dice roll
	const dice = Math.trunc(Math.random() * 6) + 1;
    
    //Display dice
	diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    
    //Check for rolled 1 if run
	if(dice !== 1) {
        //Add dice to the current score
		currentscore += dice;
        documment.getElememtById(`current--${activePlayer}`).textContent = currentscore;
        
        current0El.textContent = currentscore;

    } else {
        // Switch to next player
								switchPlayer();
	}
	}
	})
	
	btnHold.addEventListener('click', function() {
		if(playihg) {
		// add current score to active players score
scores[activePlayer] += currentscore;
documment.getElememtById(`score--${activePlayer}`).textContent = scores[activePlayer];

//check if players score is >= 100
if (scores[activePlayer] >= 100) {
	playing = false;
	diceEl.classList.remove('hidden');
	document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
		} else {
				switchPlayer();
		}
}
});

btnNew.addEventListner('click', function() {
	
	score0El.textContent = 0;
	score1El.textContent = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;
	player0El.classList.remove(player--winner)
	
	if (!playing){
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
		document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
			diceEl.classList.remove('hidden');
	}
	// if playing is false do something else like check active player first and reset the winning UI
	// if playing is true do something like skip the dice
	playing = true;
	activePlayer = 0;
	currentscore 0;
	for (let i = 0; i<=scores.length-1; i++){
		document.querySelector(`player--${i}`).textContent = 0;
		document.querySelector(`current--${i}`).textContent = 0;
		scores[i]=0;
		
	}
	
	const arr = [7, 8, 9];
	const badNewArr = [1, 2, arr[0], arr[1]];
	//spread operator when add strings or showing string value.

	const newArr = [1, 2, ...arr];
	//create a shallow copy of an array
	const mainMenuCopy = [...restaurant.mainMenu];
	const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
	
	//spread operator works on all iterables not objects.

const ingredients = [
	prompt("Let's make pasta! Ingredient 1?"), prompt(Ingredient 2?"), prompt(Ingredient 3?"), 
];

console.log(ingredients);

//SPREAD because on RIGHT side of the = operator
const arr = [1, 2, ...[3,4]];

// REST, because on LEFT side of =. takes the remaining items and puts into another array.

const [a, b, ...others] = [1,2,3,4,5];

//Objects remember order doesn't matter.

const { sat, ...weekdays } = restaurant.openingHours;

// Functions REST parameters or arguments it does the opposite of expand but collects into one array.

const add = function (...numbers) {
	console.log(numbers);
	let sum = 0;
	for(let i = 0; i < numbers.length; i++){
		sum +=numbers[i];
		}
}


	
	
	











})