import React from 'react';

import NavItem from '@/components/Navbar/components/NavItem';

const NavMenu = () => {
  const menus = [
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
    <div className="flex items-center gap-4">
      {menus.map((menu) => (
        <NavItem href={menu.href} key={menu.name}>
          {menu.name}
        </NavItem>
      ))}
    </div>
  );
};

export default NavMenu;
