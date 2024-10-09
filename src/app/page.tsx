//scr/app/page.tsx
import Background from './components/Background';

export const metadata = {
  title: 'MasterMind Game',
  description: 'MasterMind avec Next.js, TypeScript, et Tailwind CSS',
};

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <Background />
      </main>
    </div>
  );
};

export default Home;