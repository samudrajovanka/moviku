import React from 'react';

const Title = ({ children, as: Component = 'h1' }) => {
  return <Component className="heading-1 text-green-500">{children}</Component>;
};

export default Title;
