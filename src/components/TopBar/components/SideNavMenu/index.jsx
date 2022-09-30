import React from 'react';

import NavItem from '@/components/TopBar/components/NavItem';

const SideNavMenu = () => {
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
      name: 'Upoming'
    },
    {
      href: '/top-rated',
      name: 'Top Rated'
    }
  ];

  return (
    <div className="flex flex-col gap-2">
      {menus.map((menu) => (
        <NavItem href={menu.href} key={menu.name}>
          {menu.name}
        </NavItem>
      ))}
    </div>
  );
};

export default SideNavMenu;
