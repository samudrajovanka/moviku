import React from 'react';

import Image from 'next/image';

import Container from '@/components/Container';
import NavItems from '@/components/NavItems';

const Navbar = () => {
  /**
   * @todo
   * 1. buat pembungkus untuk navbar
   * 2. masukan logo yang sudah disediakan
   * 3. buat component untuk link
   * 4. untuk link yang aktif, tambahkan class active
   * 5. untuk icon ganti bahasa mungkin nanti aja
   */
  return (
    <nav className="bg-green-500 py-5">
      <Container className="flex justify-between">
        <div className="flex gap-2">
          <div className="logo">
            <Image src="/logo.png" alt="Moviku" width="33px" height="33px" />
          </div>
          <div className="inline-flex items-center gap-3">
            <span className="text-white heading-1">Moviku</span>
          </div>
        </div>
        <div className="inline-flex items-center">
          <ul className="flex justify-center gap-3">
            <NavItems href="/">Home</NavItems>
            <NavItems href="/popular">Popular</NavItems>
            <NavItems href="/upcoming">Upcoming</NavItems>
            <NavItems href="/top-rated">Top Rated</NavItems>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
