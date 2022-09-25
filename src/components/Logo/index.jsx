import React from 'react';

const Logo = ({ withoutIcon, color = 'primary' }) => {
  return (
    <div className="inline-flex gap-2 items-center">
      {!withoutIcon && (
        <div
          className={`w-8 lg:w-10 aspect-square ${
            color === 'primary' ? 'bg-green-500' : 'bg-white'
          }`}
        />
      )}
      <p className={`heading-1 ${color === 'primary' ? 'text-green-500' : 'text-white'}`}>Moviku</p>
    </div>
  );
};

export default Logo;
