import React from 'react';

import cn from 'classnames';
import { useRouter } from 'next/router';

import Link from '@/components/Link';

import style from './style.module.scss';

const NavItem = ({ children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link
      href={href}
      className={cn(style.link, {
        [style.link_active]: asPath === href
      })}
    >
      {children}
    </Link>
  );
};

export default NavItem;
