import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItems = ({ href, children }) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a className={asPath === href ? 'active-link' : 'link'}>{children}</a>
    </Link>
  );
};
export default NavItems;
