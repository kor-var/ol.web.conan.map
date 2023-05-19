import React, {ReactNode} from 'react';

interface SidebarItemProps{
    children: ReactNode,
    text: string,
    state: boolean,
    action?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({ children, text,  state, action}) => {
    return (
        <li>
            <button onClick={action} className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-ol-neutralLight dark:hover:bg-ol-neutralLight">
                {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">*/}
                {/*    <path strokeLinecap="round" strokeLinejoin="round" d={} />*/}
                {/*</svg>*/}
                {children}
                <span className="ml-3">{text}</span>
            </button>
        </li>
    );
};

export default SidebarItem;