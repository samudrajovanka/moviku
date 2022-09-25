/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import dynamic from 'next/dynamic';

import Container from '@/components/Container';
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
    <div className="bg-green-500 py-[10px]">
      <Container className="flex justify-between">
        <div className="flex gap-3">
          <div className="w-8 aspect-square bg-white" onClick={handleOpenSideNav} />
          <Logo withoutIcon color="white" />
        </div>

        <div className="w-8 aspect-square bg-white" />
      </Container>

      {isOpenSideNav && <Backdrop onClick={handleCloseSideNav} />}
      {isOpenSideNav && <SideNav />}
    </div>
  );
};

export default TopBar;
