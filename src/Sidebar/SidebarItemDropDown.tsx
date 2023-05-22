import React, {ReactNode, useState} from 'react';
import {ChevronDownIcon} from '@heroicons/react/24/outline';

interface SidebarItemDropDownProps {
    children: ReactNode;
    id: string;
    text: string;
}

const SidebarItemDropDown: React.FC<SidebarItemDropDownProps> = ({children, id, text}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <li className="rounded-lg">
            <button type="button" onClick={handleItemClick} className="flex relative p-2 w-full items-center text-gray-900 rounded-lg dark:text-white hover:bg-ol-neutralLight dark:hover:bg-ol-neutralLight"
                aria-controls={id} data-collapse-toggle={id}>
                <span className="flex-1 ml-2 text-left whitespace-nowrap">{text}</span>
                <ChevronDownIcon
                    className={`w-6 h-6 transition-transform duration-200 transform text-ol-themeLight ${
                        isOpen ? 'rotate-180 text-ol-themeSecondary' : ''
                    }`}/>
            </button>
            {isOpen && <ul id={id} className="space-y-2 rounded-lg bg-ol-neutralLighter">{children}</ul>}
        </li>
    );
};

export default SidebarItemDropDown;
