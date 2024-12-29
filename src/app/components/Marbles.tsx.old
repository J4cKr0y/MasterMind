//scr/app/components/Marbles.tsx
type Color = 'red' | 'purple' | 'blue' | 'green' | 'yellow';
const colors: Color[] = ['red', 'purple', 'blue', 'green', 'yellow'];

const getMarbleClass = (color: Color): string => {
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

const Marbles: React.FC = () => {
  return (
    <div className="reflect">
      <div className="container flex flex-col justify-around">
        {colors.map((color, index) => (
          <div key={`marble${index}`} data-name={`marble${index}`} className={getMarbleClass(color)}>
            <div className="absolute top-0.5 left-1 w-11/12 h-11/12 rounded-full bg-marble-before filter blur-xs z-2"></div>
            <div className="absolute top-1 left-2 w-full h-full rounded-full bg-marble-after transform -translate-x-3 -translate-y-3 skew-x-2 filter blur-sm"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marbles;