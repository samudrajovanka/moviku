import { useState } from 'react';

import Dropdown from '@/components/Dropdown';
import DropdownItem from '@/components/Dropdown/component/DropdownItem';
import { useLanguageContext } from '@/contexts/LanguageContext';
import type { Language } from '@/contexts/LanguageContext/types';

const LanguageChanger = () => {
  const { selectedLanguage, changeLanguage, language } = useLanguageContext();
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setIsShowDropdown((current) => !current);
  };

  const handleChangeLanguage = (languageKey: Language) => {
    changeLanguage(languageKey);
    setIsShowDropdown(false);
  };

  return (
    <div className="relative h-fit">
      <button
        type="button"
        className="border-[2px] border-white px-2 rounded-md"
        onClick={handleToggleDropdown}
      >
        <span className="text-white">{selectedLanguage.toUpperCase()}</span>
      </button>

      {isShowDropdown && (
        <Dropdown>
          {Object.entries(language).map(([languageKey, laguageValue]) => (
            <DropdownItem
              key={languageKey}
              onClick={() => handleChangeLanguage(languageKey as Language)}
            >
              {laguageValue}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </div>
  );
};

export default LanguageChanger;
