// GameControls.test.tsx
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { GameControls } from './GameControls';
import { Color } from '../types/game';

describe('GameControls', () => {
  const defaultProps = {
    selectedColor: null as Color | null,
    onSelectColor: jest.fn(),
    onValidate: jest.fn(),
    canValidate: false,
    gameOver: false,
    hasWon: false,
  };

  it('renders the marbles component', () => {
    render(<GameControls {...defaultProps} />);
    const marblesElement = screen.getByText(/Marbles/i);
    expect(marblesElement).toBeInTheDocument();
  });

  it('renders the validate button', () => {
    render(<GameControls {...defaultProps} />);
    const validateButton = screen.getByRole('button', { name: /Valider/i });
    expect(validateButton).toBeInTheDocument();
  });

  it('disables validate button when canValidate is false or gameOver is true', () => {
    render(<GameControls {...defaultProps} canValidate={false} gameOver={true} />);
    const validateButton = screen.getByRole('button', { name: /Valider/i });
    expect(validateButton).toBeDisabled();
  });

  it('enables validate button when canValidate is true and gameOver is false', () => {
    render(<GameControls {...defaultProps} canValidate={true} gameOver={false} />);
    const validateButton = screen.getByRole('button', { name: /Valider/i });
    expect(validateButton).toBeEnabled();
  });

  it('calls onValidate when validate button is clicked', () => {
    render(<GameControls {...defaultProps} canValidate={true} gameOver={false} />);
    const validateButton = screen.getByRole('button', { name: /Valider/i });
    fireEvent.click(validateButton);
    expect(defaultProps.onValidate).toHaveBeenCalledTimes(1);
  });

  it('displays win message when hasWon is true', () => {
    render(<GameControls {...defaultProps} gameOver={true} hasWon={true} />);
    const winMessage = screen.getByText(/Félicitations ! Vous avez gagné !/i);
    expect(winMessage).toBeInTheDocument();
  });

  it('displays game over message when hasWon is false', () => {
    render(<GameControls {...defaultProps} gameOver={true} hasWon={false} />);
    const gameOverMessage = screen.getByText(/Game Over ! La partie est terminée./i);
    expect(gameOverMessage).toBeInTheDocument();
  });

  it('calls window.location.reload when new game button is clicked', () => {
    Object.defineProperty(window, 'location', {
      value: {
        reload: jest.fn(),
      },
      writable: true,
    });

    render(<GameControls {...defaultProps} gameOver={true} />);
    const newGameButton = screen.getByRole('button', { name: /Nouvelle partie/i });
    fireEvent.click(newGameButton);
    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });
});
