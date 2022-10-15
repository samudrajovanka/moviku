import React from 'react';

const Dropdown = ({ children }) => {
  return (
    <div className="absolute translate-y-2 right-0 bg-white py-1 rounded-md shadow-md">
      {children}
    </div>
  );
};

export default Dropdown;
