import React from 'react';

const Backdrop = ({ onClick }) => {
  return <div className="bg-black/50 fixed inset-0" onClick={onClick} aria-hidden="true" />;
};

export default Backdrop;
