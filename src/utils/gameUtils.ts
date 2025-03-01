// src/utils/gameUtils.ts
import { Color, Feedback } from '@/types/game';

/**
 * Obtient la classe CSS pour une bille en fonction de sa couleur
 */
export const getMarbleClass = (color: Color | null): string => {
  if (!color) return "w-8 h-8 rounded-full bg-white border-2 border-gray-300";
  
  const baseClasses = "relative w-8 h-8 mt-10 rounded-full shadow-inner-marble shadow-outer-marble";
  const colorClasses: Record<Color, string> = {
    red: "bg-red-marble",
    purple: "bg-purple-marble",
    blue: "bg-blue-marble",
    green: "bg-green-marble",
    yellow: "bg-yellow-marble",
  };
  return `${baseClasses} ${colorClasses[color]}`;
};

/**
 * Calcule la difficulté du code secret (plus le score est élevé, plus c'est difficile)
 */
export const calculateCodeDifficulty = (secretCode: Color[]): number => {
  const uniqueColors = new Set(secretCode).size;
  // Plus il y a de couleurs uniques, plus c'est facile
  return 5 - uniqueColors;
};

/**
 * Calcule un score basé sur le nombre d'essais et le temps pris
 */
export const calculateGameScore = (
  attempts: number, 
  timeInSeconds: number, 
  codeDifficulty: number
): number => {
  // Base score: 1000 points
  let score = 1000;
  
  // Déduire 50 points par tentative (sauf la première)
  score -= (attempts - 1) * 50;
  
  // Déduire 1 point par seconde
  score -= timeInSeconds;
  
  // Multiplier par la difficulté (1.0-2.0)
  score *= (1 + codeDifficulty * 0.2);
  
  return Math.max(0, Math.round(score));
};

/**
 * Formater le temps de jeu en minutes:secondes
 */
export const formatGameTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

/**
 * Convertit le feedback en message texte explicatif
 */
export const getFeedbackMessage = (feedback: Feedback): string => {
  const blacks = feedback.filter(f => f === 'black').length;
  const whites = feedback.filter(f => f === 'white').length;
  
  if (blacks === 4) return "Parfait ! Toutes les billes sont à la bonne position.";
  if (blacks === 0 && whites === 0) return "Aucune bille n'est de la bonne couleur.";
  
  let message = "";
  if (blacks > 0) {
    message += `${blacks} bille${blacks > 1 ? 's' : ''} de la bonne couleur à la bonne position. `;
  }
  if (whites > 0) {
    message += `${whites} bille${whites > 1 ? 's' : ''} de la bonne couleur mais mal placée${whites > 1 ? 's' : ''}.`;
  }
  
  return message;
};