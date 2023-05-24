import React, {ReactNode, useState} from 'react';
import {ChevronDownIcon} from '@heroicons/react/24/outline';

interface SidebarItemDropDownProps {
    children: ReactNode,
    id: string,
    text: string,
    classNameButton?: string,
    classNameList?: string,
}

const SidebarItemDropDown: React.FC<SidebarItemDropDownProps> = ({children, id, text, classNameButton, classNameList}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <button type="button" onClick={handleItemClick} className={`flex relative p-2 w-full items-center text-gray-900 dark:text-white hover:bg-ol-neutralPrimaryAlt dark:hover:bg-ol-neutralLight ${classNameButton}`}
                aria-controls={id} data-collapse-toggle={id}>
                <span className="flex-1 ml-2 text-left whitespace-nowrap">{text}</span>
                <ChevronDownIcon
                    className={`w-6 h-6 transition-transform duration-200 transform text-ol-themeLight ${
                        isOpen ? 'rotate-180 text-ol-themeSecondary' : ''
                    }`}/>
            </button>
            {isOpen && <ul id={id} className={`${classNameList}`}>{children}</ul>}
        </li>
    );
};

export default SidebarItemDropDown;
