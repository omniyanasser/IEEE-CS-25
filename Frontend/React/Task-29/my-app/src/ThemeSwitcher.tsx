import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import Counter from './Counter';

const themeAtom = atomWithStorage('theme','light');

function ThemeSwitcher() {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        minHeight: '50vh',
        padding: '20px',
      }}
    >
      <h2>Current Theme: {theme}</h2>
      <Counter/>

      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 24px',
          margin: '10px 0',
          borderRadius: '8px',
          border: 'none',
         
        }}
       
      >
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </div>
  );
}
export default ThemeSwitcher