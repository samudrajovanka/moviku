import React from 'react';

import cn from 'classnames';
import { default as NextLink } from 'next/link';

const Link = ({ children, href, target, isExternal = false, className }) => {
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(className)}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : null}
        className={cn(className)}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
