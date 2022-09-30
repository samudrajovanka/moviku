import Image from 'next/image';
import Link from 'next/link';

import textMoviku from '@/assets/icons/Moviku.png';
import silang from '@/assets/icons/silang.png';
import logoMovie from '@/assets/icons/Vector.png';

const SideNav = ({ angka }) => {
  const tailwindArr = [
    `bg-green-600 p-3 pl-4 pt-5 pb-5 rounded-tr-full rounded-br-full
    cursor-pointer hover:bg-green-200`,
    'p-3 pl-4 pt-5 pb-5 rounded-tr-full rounded-br-full cursor-pointer hover:bg-green-200',
    'p-3 pl-4 pt-5 pb-5 rounded-tr-full rounded-br-full cursor-pointer hover:bg-green-200',
    'p-3 pl-4 pt-5 pb-5 rounded-tr-full rounded-br-full cursor-pointer hover:bg-green-200'
  ];
  const isiNav = ['Home', 'Popular', 'Upcoming', 'Top Rated'];
  const urlName = ['/', '/popular', '/upcoming', '/top-rated'];

  return (
    <div className="w-4/5 h-screen z-10 fixed bg-white top-0 duration-75">
      <div className="border-b-2 border-black">
        <div className="flex w-full justify-between p-4 pt-7 pb-7">
          <div className="flex items-center row-gap">
            <Image src={logoMovie} alt="x" />
            <Image src={textMoviku} alt="x" className="ml-8" />
          </div>
          <Image src={silang} alt="x" onClick={angka} />
        </div>
      </div>
      <div className="linkAllPage">
        <ul className="w-4/5">
          {isiNav.map((value, index) => {
            return (
              <Link href={urlName[index]} key={value}>
                <li className={tailwindArr[index]}>{value}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
