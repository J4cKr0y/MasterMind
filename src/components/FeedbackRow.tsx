// src/components/FeedbackRow.tsx
'use client';
import { FeedbackPeg } from './FeedbackPeg';
import type { Feedback } from '../types/game';

interface FeedbackRowProps {
  feedback: Feedback;
}

export function FeedbackRow({ feedback }: FeedbackRowProps) {
  return (
    <div className="grid grid-cols-2 gap-1 w-8">
      {feedback.map((type, i) => (
        <FeedbackPeg key={i} type={type} />
      ))}
    </div>
  );
}

