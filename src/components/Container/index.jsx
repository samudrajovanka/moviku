import React from 'react';

const Container = ({ children, className }) => {
  return (
    <div
      className={`mx-auto max-w-[1240px] ${className}`}
      style={{
        width: 'calc(100% - 32px)'
      }}
    >
      {children}
    </div>
  );
};

export default Container;
