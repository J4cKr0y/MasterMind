// src/components/FeedbackPeg.tsx
'use client';

interface FeedbackPegProps {
  type: 'black' | 'white' | null;
}

export function FeedbackPeg({ type }: FeedbackPegProps) {
  if (type === null) return (
    <div className="w-3 h-3 rounded-full bg-gray-300" />
  );

  const tooltipText = type === 'black'
    ? "Bonne couleur à la bonne position !"
    : "Bonne couleur mais mauvaise position";

  return (
    <div className="group relative">
      <div className={`w-3 h-3 rounded-full ${
        type === 'black' ? 'bg-gray-900' : 'bg-gray-100'
      } cursor-help`} />
      <div className="invisible group-hover:visible absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10">
        {tooltipText}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800"></div>
      </div>
    </div>
  );
}

