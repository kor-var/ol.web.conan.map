import React, {ReactNode} from 'react';

interface SidebarItemProps{
    children?: ReactNode,
    text: string,
    state: boolean,
    action?: () => void
    classNameButton?: string,
    classNameText?: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ children, text,  state, action, classNameButton, classNameText}) => {
    return (
        <li>
            <button onClick={action} className={`flex relative w-full items-center p-2 text-gray-900 dark:text-white hover:bg-ol-neutralLight dark:hover:bg-ol-neutralLight ${classNameButton}`}>
                <span className={`flex-1 ml-2 text-left whitespace-nowrap ${classNameText}`}>{`${text}`}</span>
                { state && children }
            </button>
        </li>
    );
};

export default SidebarItem;