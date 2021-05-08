'use strict';
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldScore = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

score0Element.textContent = 0;
score1Element.textContent = 0;

dice.classList.add('hidden');

const rollADice = () => {
  let number = Math.trunc(Math.random() * 6 + 1);
  dice.setAttribute(`src`, `dice-${number}.png`);
  dice.classList.remove('hidden');
  if (number !== 1 && player0.classList.contains('player--active')) {
    currentScore1.textContent = 0;
    currentScore0.textContent = `${Number(currentScore0.textContent) + number}`;
  } else if (number !== 1 && player1.classList.contains('player--active')) {
    currentScore0.textContent = 0;
    currentScore1.textContent = `${Number(currentScore1.textContent) + number}`;
  } else {
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
  }

  //   if (number === 1 && player0.classList.contains('player--active')) {
  //     player0.classList.toggle('player--active');
  //     // player1.classList.toggle('player--active');
  //   }
  //   score0Element.textContent = `${number}`;
  //   dice.classList.remove('hidden');
};

const holdScore = () => {
  if (player0.classList.contains('player--active')) {
    score0Element.textContent = `${
      Number(score0Element.textContent) + Number(currentScore0.textContent)
    }`;
    currentScore0.textContent = 0;
    if (Number(score0Element.textContent) >= 100) {
      currentScore0.textContent = 'YOU WON THE GAME';
      btnRollDice.removeEventListener('click', rollADice);
      btnHoldScore.removeEventListener('click', holdScore);
    }
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  } else if (player1.classList.contains('player--active')) {
    score1Element.textContent = `${
      Number(score1Element.textContent) + Number(currentScore1.textContent)
    }`;
    currentScore1.textContent = 0;
    if (Number(score1Element.textContent) >= 100) {
      currentScore1.textContent = 'YOU WON THE GAME';
      btnRollDice.removeEventListener('click', rollADice);
      btnHoldScore.removeEventListener('click', holdScore);
    }

    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
};

const resetGame = () => {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  btnRollDice.addEventListener('click', rollADice);
  btnHoldScore.addEventListener('click', holdScore);
};

btnRollDice.addEventListener('click', rollADice);
btnHoldScore.addEventListener('click', holdScore);
btnNewGame.addEventListener('click', resetGame);
