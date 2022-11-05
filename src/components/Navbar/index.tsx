import Container from '@/components/Container';
import Link from '@/components/Link';
import Logo from '@/components/Logo';

import NavMenu from './components/NavMenu';

const Navbar = () => {
  return (
    <nav className="bg-green-500 py-3 sticky top-0 z-20">
      <Container className="flex justify-between">
        <Link href="/">
          <Logo color="white" />
        </Link>

        <NavMenu />
      </Container>
    </nav>
  );
};

export default Navbar;
