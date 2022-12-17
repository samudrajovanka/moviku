import type { DropdownItemProps } from './types';

const DropdownItem = ({ children, onClick }: DropdownItemProps) => {
  return (
    <button
      type="button"
      className="px-3 py-2 text-black hover:bg-gray-200 w-full text-left"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DropdownItem;
