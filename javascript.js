//Remember, we're gonna use strict mode in all scripts now!  This helps catch errors too in the console.log of browser.
"use strict";

//How to setup a separate desktop for Mac

// put score to zero score--0 or score--1 id.  array?
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('btn--roll');
const btnHold = document.querySelector('btn--hold');


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

