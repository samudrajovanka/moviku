import type { HTMLAttributeAnchorTarget } from 'react';
import type React from 'react';

import type { LinkProps as LinkNextProps } from 'next/link';

export type LinkProps = {
  children: React.ReactNode;
  href: LinkNextProps['href'];
  target?: HTMLAttributeAnchorTarget;
  isExternal?: boolean;
  className?: string;
};
