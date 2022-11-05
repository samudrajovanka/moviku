import cn from 'classnames';
import { default as NextLink } from 'next/link';

import type { LinkProps } from './types';

const Link = ({ children, href, target, isExternal, className }: LinkProps) => {
  if (isExternal) {
    return (
      <a href={href as string} target="_blank" rel="noopener noreferrer" className={cn(className)}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={cn(className)}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
