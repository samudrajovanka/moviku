import React from 'react';

import Container from '@/components/Container';
import Link from '@/components/Link';
import Logo from '@/components/Logo';
import NavItem from '@/components/Navbar/components/NavItem';

const Navbar = () => {
  const navs = [
    {
      href: '/',
      name: 'Home'
    },
    {
      href: '/popular',
      name: 'Popular'
    },
    {
      href: '/upcoming',
      name: 'Upcoming'
    },
    {
      href: '/top-rated',
      name: 'Top Rated'
    }
  ];

  return (
    <nav className="bg-green-500 py-3">
      <Container className="flex justify-between">
        <Link href="/">
          <Logo color="white" />
        </Link>

        <div className="flex items-center gap-4">
          {navs.map((nav) => (
            <NavItem href={nav.href} key={nav.name}>
              {nav.name}
            </NavItem>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
