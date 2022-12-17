import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

import Moon from '@/assets/icons/Moon.svg';
import Sun from '@/assets/icons/Sun.svg';

import type { ModeProps } from './types';

const DarkMode = ({ withText }: ModeProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? 'systemTheme' : theme;

  return (
    <button type="button" className="grid grid-cols-2 items-center">
      {currentTheme === 'light' ? (
        <button
          type="button"
          className="grid grid-cols-2 w-14 h-8 rounded-full 
          bg-white border border-green-500 items-center transition duration-300"
          onClick={() => setTheme('dark')}
        >
          {' '}
          <div
            id="switch-toggle"
            className="left-3 w-6 h-6 relative rounded-full 
              transition duration-500 transform bg-green-500 -translate-x-2 p-1 text-white"
          />
          <Moon className="left-1 relative" />
        </button>
      ) : (
        <button
          type="button"
          className="grid grid-cols-2 w-14 h-8 rounded-full 
          bg-white border border-green-500 items-center transition duration-300"
          onClick={() => setTheme('light')}
        >
          <Sun className="left-1 relative" />
          <div
            id="switch-toggle"
            className="w-6 h-6 relative rounded-full left-2
            transition duration-500 transform bg-green-500 -translate-x-2 p-1 text-white"
          />
        </button>
      )}
      {withText && <p className="body-1 text-black dark:text-white">{theme} Mode</p>}
    </button>
  );
};
export default DarkMode;
