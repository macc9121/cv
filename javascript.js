//Remember, we're gonna use strict mode in all scripts now!  This helps catch errors too in the console.log of browser.
"use strict";

//How to setup a separate desktop for Mac

// put score to zero score--0 or score--1 id.  array?
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


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

//Rolling dice function.
btnRoll.addEventListener('click', function() {
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
		activePlayer = activePlayer === 0 ? 1 : 0;
	}


})