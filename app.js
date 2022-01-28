// import functions and grab DOM elements
const shellOneBtn = document.getElementById('shell-1-btn');
const shellTwoBtn = document.getElementById('shell-2-btn');
const shellThreeBtn = document.getElementById('shell-3-btn');
const resetBtn = document.getElementById('reset');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('totalGames');
const percentEl = document.getElementById('winPercent');

// let state

let correctGuess = 0;
let totalGuesses = 0;

function percentage(correct, total){
    return (Math.round(100 * (correct) / total));
}

// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state

shellOneBtn.addEventListener('click', ()=> {
    reveal();

    totalGuesses++;

    const pearlLocation = Math.ceil(Math.random() * 3);

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
    
    displayResults();
});

shellTwoBtn.addEventListener('click', ()=> {
    reveal();

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

    displayResults();
});

shellThreeBtn.addEventListener('click', ()=> {
    reveal();

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

    displayResults();
});

function reveal() {
    pearl1.classList.remove('reveal');
    pearl2.classList.remove('reveal');
    pearl3.classList.remove('reveal');
}

function displayResults() {
    winsEl.textContent = correctGuess;
    totalEl.textContent = totalGuesses;
    lossesEl.textContent = totalGuesses - correctGuess;
    percentEl.textContent = percentage(correctGuess, totalGuesses);
}

resetBtn.addEventListener('click', ()=> {
    pearl1.classList.remove('reveal');
    pearl2.classList.remove('reveal');
    pearl3.classList.remove('reveal');

    winsEl.textContent = 0;
    totalEl.textContent = 0;
    lossesEl.textContent = 0;
    percentEl.textContent = 0;

    correctGuess = 0;
    totalGuesses = 0;
    

});