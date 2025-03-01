

describe('unit tests for gameLogic.tsx file', () => {

it('initializes the game with a valid board size and empty code', () => {
  const { game } = require('./gameLogic');
  const initialCode = game.initializeGame(4); // 4-color board

  expect(initialCode).toEqual(new Array(4).fill(null)); // expected array of nulls
});

it('generates a random code with the correct number of colors', () => {
  const { game } = require('./gameLogic');
  const generatedCode = game.generateCode(5); // 5-color board

  expect(generatedCode).toEqual(expect.arrayContaining(['red', 'blue', 'green', 'yellow', 'orange']));
});

it('rejects invalid guesses and returns an error message', () => {
  const { game } = require('./gameLogic');
  const invalidGuess = ['purple']; // incorrect color

  expect(game.validateGuess(invalidGuess)).toBe('Invalid guess. Try again!');
});

it('calculates the score correctly based on correct positions and colors', () => {
  const { game } = require('./gameLogic');
  const code = ['red', 'blue', 'green'];
  const guess = ['red', 'blue', 'orange']; // 2 correct positions, 1 incorrect color

  expect(game.calculateScore(code, guess)).toBe(2); // 2 correct positions
});

it('provides hints for correct positions and colors in the guess', () => {
  const { game } = require('./gameLogic');
  const code = ['red', 'blue', 'green'];
  const guess = ['red', 'blue', 'orange']; // 2 correct positions, 1 incorrect color

  expect(game.getHint(code, guess)).toBe('Correct position!'); // hint for the first two colors
});

});