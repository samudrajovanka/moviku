import React from 'react';

const DropdownItem = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="px-3 py-2 hover:bg-gray-200 w-full text-left"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DropdownItem;
