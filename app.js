// import functions and grab DOM elements
const shellOneBtn = document.getElementById('shell-1-btn');
const shellTwoBtn = document.getElementById('shell-2-btn');
const shellThreeBtn = document.getElementById('shell-3-btn');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('totalGames');

// let state

let correctGuess = 0;
let totalGuesses = 0;

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

shellOneBtn.addEventListener('click', ()=> {
    pearl1.classList.remove('reveal');
    pearl2.classList.remove('reveal');
    pearl3.classList.remove('reveal');

    totalGuesses++;

    const pearlLocation = Math.ceil(Math.random() *3);

    if (pearlLocation === 1) {
        pearl1.classList.add('reveal');
        correctGuess++;
    }
    else if (pearlLocation === 2) {
        pearl2.classList.add('reveal');
    }
    else {
        pearl3.classList.add('reveal');
    }

    winsEl.textContent = correctGuess;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuess;
});

shellTwoBtn.addEventListener('click', ()=> {
    pearl1.classList.remove('reveal');
    pearl2.classList.remove('reveal');
    pearl3.classList.remove('reveal');

    totalGuesses++;

    const pearlLocation = Math.ceil(Math.random() * 3);

    if (pearlLocation === 1) {
        pearl1.classList.add('reveal');
    }
    else if (pearlLocation === 2) {
        pearl2.classList.add('reveal');
        correctGuess++;
    }
    else {
        pearl3.classList.add('reveal');
    }

    winsEl.textContent = correctGuess;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuess;
});

shellThreeBtn.addEventListener('click', ()=> {
    pearl1.classList.remove('reveal');
    pearl2.classList.remove('reveal');
    pearl3.classList.remove('reveal');

    totalGuesses++;

    const pearlLocation = Math.ceil(Math.random() * 3);

    if (pearlLocation === 1) {
        pearl1.classList.add('reveal');
    }
    else if (pearlLocation === 2) {
        pearl2.classList.add('reveal');
    }
    else {
        pearl3.classList.add('reveal');
        correctGuess++;
    }

    winsEl.textContent = correctGuess;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuess;
});
