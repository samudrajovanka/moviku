import type React from 'react';

import type { LinkProps } from '@/components/Link/types';

export type NavItemProps = {
  href: LinkProps['href'];
  children: React.ReactNode;
};
