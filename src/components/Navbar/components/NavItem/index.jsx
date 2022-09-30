import React from 'react';

import cn from 'classnames';
import { useRouter } from 'next/router';

import Link from '@/components/Link';

const NavItem = ({ href, children }) => {
  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      className={cn({
        'text-green-100 body-1 hover:text-white hover:subtile-1': asPath !== href,
        'text-white subtile-1': asPath === href
      })}
    >
      {children}
    </Link>
  );
};
export default NavItem;
