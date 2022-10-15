import React from 'react';

import NavItem from '@/components/TopBar/components/NavItem';
import { useLanguageContext } from '@/contexts/LanguageContext';

const SideNavMenu = () => {
  const { dictionary, selectedLanguage } = useLanguageContext();

  const menus = [
    {
      href: '/',
      name: dictionary[selectedLanguage].home
    },
    {
      href: '/popular',
      name: dictionary[selectedLanguage].popular
    },
    {
      href: '/upcoming',
      name: dictionary[selectedLanguage].upcoming
    },
    {
      href: '/top-rated',
      name: dictionary[selectedLanguage].topRated
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
