import cn from 'classnames';
import { useRouter } from 'next/router';

import Link from '@/components/Link';

import type { NavItemProps } from './types';

const NavItem = ({ href, children }: NavItemProps) => {
  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      className={cn({
        'text-green-100 body-1 dark:text-zinc-400 hover:text-white hover:subtile-1':
          asPath !== href,
        'text-white subtile-1': asPath === href
      })}
    >
      {children}
    </Link>
  );
};
export default NavItem;
