import React from 'react';

import cn from 'classnames';
import { useRouter } from 'next/router';

import Link from '@/components/Link';

const NavItem = ({ children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      className={cn('py-3 px-4 w-11/12 hover:bg-green-500 hover:text-white hover:rounded-r-full', {
        'bg-green-500 text-white rounded-r-full': asPath === href
      })}
    >
      {children}
    </Link>
  );
};

export default NavItem;
