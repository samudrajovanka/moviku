import cn from 'classnames';

import DarkMode from '@/components/DarkMode';
import SideNavHead from '@/components/TopBar/components/SideNavHead';
import SideNavMenu from '@/components/TopBar/components/SideNavMenu';

import type { SideNavProps } from './types';

const SideNav = ({ isOpen, onClose }: SideNavProps) => {
  return (
    <nav
      className={cn(
        'w-4/5 h-screen z-30 fixed top-0 bg-white py-3 transition-transform dark:bg-zinc-800',
        {
          'translate-x-0': isOpen,
          '-translate-x-full': !isOpen
        }
      )}
    >
      <div className="flex flex-col gap-3">
        <SideNavHead onClose={onClose} />
        <div className="h-[2px] w-full bg-gray-200 dark:bg-zinc-900" />
        <SideNavMenu />
        <div className="h-[2px] w-full bg-gray-200 dark:bg-zinc-900" />
        <div className="flex px-3 py-[10px]">
          <DarkMode withText />
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
