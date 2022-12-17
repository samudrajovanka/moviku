import DarkMode from '@/components/DarkMode';
import LanguageChanger from '@/components/LanguageChanger';
import NavItem from '@/components/Navbar/components/NavItem';
import { useLanguageContext } from '@/contexts/LanguageContext';

const NavMenu = () => {
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
    <div className="flex items-center gap-4">
      {menus.map((menu) => (
        <NavItem href={menu.href} key={menu.name}>
          {menu.name}
        </NavItem>
      ))}

      <LanguageChanger />
      <DarkMode />
    </div>
  );
};

export default NavMenu;
