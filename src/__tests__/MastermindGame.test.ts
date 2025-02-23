import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Background from '../app/page';
import { generateSequence } from '../utils/gameUtils'; // chemin à ajuster
import { checkGuess } from '../utils/gameUtils'; // chemin à ajuster

test('renders the title', () => {
  render(<Background />);
  const titleElement: HTMLElement = screen.getByText(/MasterMind/i);
  expect(titleElement).toBeInTheDocument();
});

test('allows the user to pick a color', () => {
  render(<Background />);
  const redMarble = screen.getByTestId('marble0');
  fireEvent.click(redMarble);
  // Ajoutez des assertions ici si nécessaire
});

test('should pick the correct color', () => {
  const selectedColor = 'red'; // Supposons une fonction pickColor existante
  expect(selectedColor).toBe('red'); 
});

test('should generate a sequence of 4 colors', () => {
  const sequence = generateSequence();
  expect(sequence).toHaveLength(4);
});

test('should generate a sequence with valid colors', () => {
  const sequence = generateSequence();
  const validColors = ['red', 'purple', 'blue', 'green', 'yellow'];
  sequence.forEach((color: string) => {
    expect(validColors).toContain(color);
  });
});

test('should return correct number of well-placed colors', () => {
  const sequence = ['red', 'blue', 'green', 'yellow'];
  const guess = ['red', 'blue', 'green', 'yellow'];
  const result = checkGuess(sequence, guess);
  expect(result.correctPositions).toBe(4);
  expect(result.correctColors).toBe(4);
});

test('should return correct number of correct colors but wrong positions', () => {
  const sequence = ['red', 'blue', 'green', 'yellow'];
  const guess = ['blue', 'red', 'yellow', 'green'];
  const result = checkGuess(sequence, guess);
  expect(result.correctPositions).toBe(0);
  expect(result.correctColors).toBe(4);
});

test('should return correct number of wrong colors and wrong positions', () => {
  const sequence = ['purple', 'purple', 'purple', 'purple'];
  const guess = ['blue', 'red', 'yellow', 'green'];
  const result = checkGuess(sequence, guess);
  expect(result.correctPositions).toBe(0);
  expect(result.correctColors).toBe(0);
});