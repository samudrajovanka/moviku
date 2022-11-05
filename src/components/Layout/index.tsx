import dynamic from 'next/dynamic';

import Footer from '@/components/Footer';
import useBreakpoint from '@/hooks/useBreakpoint';

import type { LayoutProps } from './types';

const Navbar = dynamic(() => import('@/components/Navbar'));
const TopBar = dynamic(() => import('@/components/TopBar'));

const Layout = ({ children }: LayoutProps) => {
  const breakpoint = useBreakpoint();

  return (
    <div className="relative min-h-screen flex flex-col">
      {breakpoint === 'desktop' && <Navbar />}
      {breakpoint !== 'desktop' && <TopBar />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
