import React from 'react';

import dynamic from 'next/dynamic';

import useBreakpoint from '@/hooks/useBreakpoint';

const Navbar = dynamic(() => import('@/components/Navbar'));
const TopBar = dynamic(() => import('@/components/TopBar'));

const Layout = ({ children }) => {
  const breakpoint = useBreakpoint();

  return (
    <div className="relative min-h-screen">
      {breakpoint === 'desktop' && <Navbar />}
      {breakpoint !== 'desktop' && <TopBar />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
