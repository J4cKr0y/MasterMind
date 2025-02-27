// src/types/game.ts
export type Color = 'red' | 'purple' | 'blue' | 'green' | 'yellow';
export type Row = (Color | null)[];
export type Board = Row[];
export type Feedback = ('black' | 'white' | null)[];