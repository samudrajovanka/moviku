import type React from 'react';

import type { LinkProps } from '@/components/Link/types';

export type NavItemProps = {
  children: React.ReactNode;
  href: LinkProps['href'];
};
