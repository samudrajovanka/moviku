import React from 'react';

const Badge = ({ children }) => {
  return <div className="px-3 py-1 bg-black/40 rounded-lg backdrop-blur-sm">{children}</div>;
};

export default Badge;
