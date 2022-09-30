import React from 'react';

import Movie from '@/assets/icons/movie.svg';

const Logo = ({ withoutIcon, color = 'primary' }) => {
  return (
    <div className="inline-flex gap-2 items-center">
      {!withoutIcon && (
        <Movie className={`text-4xl ${color === 'primary' ? 'text-green-500' : 'text-white'}`} />
      )}
      <p className={`heading-1 ${color === 'primary' ? 'text-green-500' : 'text-white'}`}>Moviku</p>
    </div>
  );
};

export default Logo;
