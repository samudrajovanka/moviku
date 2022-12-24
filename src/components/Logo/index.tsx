import Movie from '@/assets/icons/movie.svg';

import type { LogoProps } from './types';

const Logo = ({ withoutIcon, color = 'primary' }: LogoProps) => {
  return (
    <div className="inline-flex gap-2 items-center">
      {!withoutIcon && (
        <Movie
          className={`text-4xl dark:text-white ${
            color === 'primary' ? 'text-green-500' : 'text-white'
          }`}
        />
      )}
      <p
        className={`heading-1 dark:text-white ${
          color === 'primary' ? 'text-green-500' : 'text-white'
        }`}
      >
        Moviku
      </p>
    </div>
  );
};

export default Logo;
