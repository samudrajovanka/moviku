import React, { useState } from 'react';

import dynamic from 'next/dynamic';

import HumbergerBar from '@/assets/icons/humbergerBar.svg';
import Container from '@/components/Container';
import Link from '@/components/Link';
import Logo from '@/components/Logo';

const SideNav = dynamic(() => import('./components/SideNav'));
const Backdrop = dynamic(() => import('@/components/Backdrop'));

const TopBar = () => {
  const [isOpenSideNav, setIsOpenSideNav] = useState(false);

  const handleOpenSideNav = () => {
    setIsOpenSideNav(true);
  };

  const handleCloseSideNav = () => {
    setIsOpenSideNav(false);
  };

  return (
    <div className="bg-green-500 py-[10px] z-20 sticky top-0">
      <Container className="flex justify-between">
        <div className="flex gap-3 items-center">
          <HumbergerBar
            className="text-[32px] text-white cursor-pointer"
            onClick={handleOpenSideNav}
          />
          <Link href="/">
            <Logo withoutIcon color="white" />
          </Link>
        </div>
        <div className="w-8 aspect-square bg-white" />
      </Container>

      {isOpenSideNav && <Backdrop onClick={handleCloseSideNav} />}
      <SideNav isOpen={isOpenSideNav} onClose={handleCloseSideNav} />
    </div>
  );
};

export default TopBar;
