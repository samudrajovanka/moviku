import React from 'react';

import cn from 'classnames';

const Title = ({ children, as: Component = 'h1', className }) => {
  return <Component className={cn('heading-1 text-green-500', className)}>{children}</Component>;
};

export default Title;
