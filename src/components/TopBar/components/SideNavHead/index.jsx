import React from 'react';

import Cross from '@/assets/icons/cross.svg';
import Logo from '@/components/Logo';

const SideNavHead = ({ onClose }) => {
  return (
    <div className="flex justify-between items-center px-4 py-[10px]">
      <Logo />
      <Cross className="text-gray-400 text-xl cursor-pointer" onClick={onClose} />
    </div>
  );
};

export default SideNavHead;
