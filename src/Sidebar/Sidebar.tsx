import React, { useState, useEffect } from 'react';
import {SidebarItem} from "./SidebarItem";

interface SidebarProps {
    items: SidebarItem[];
}

function Sidebar(props: SidebarProps) {
    const {items} = props;
    const [isOpen, setIsOpen] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isSmall = window.innerWidth <= 640;
            setIsSmallScreen(isSmall);

            if (isSmall && !isOpen) {
                setIsOpen(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="absolute flex z-50">
            {/* Button to Reopen Sidebar */}
            {!isOpen && isSmallScreen && (
                <button
                    className="fixed top-0 right-0 bg-gray-100 text-ol-themePrimary rounded-md p-2 m-2 shadow-md border-2 border-ol-themePrimary"
                    onClick={toggleSidebar}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </button>
            )}

            {/* Sidebar Navigation */}
            <aside
                className={`fixed top-0 left-0 h-screen w-64 bg-ol-neutralQuaternary shadow-lg transition-transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <button className="absolute top-0 right-[-58px] bg-gray-100 text-ol-themePrimary rounded-md p-2 m-2 shadow-md border-2 border-ol-themePrimary"
                    onClick={toggleSidebar} >
                    <svg
                        className={`w-6 h-6 transform ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h8m-8 6h16"
                        />
                    </svg>
                </button>
                <div className="flex flex-col h-full w-full px-3 py-4 overflow-y-auto bg-ol-white dark:bg-ol-white">
                    <ul className="space-y-2 w-full font-medium">
                        {items.map((item, index) => (
                            <li key={index}>
                                <button className="flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-ol-neutralLight dark:hover:bg-ol-neutralLight">
                                    <span className="ml-3">{item.text}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="p-4 mt-auto w-full rounded-lg bg-ol-themeDark dark:bg-ol-themeDarker " role="alert">
                        <div className="flex items-center mb-3">
                        <span className="bg-purple-300 text-purple-950 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-300 dark:text-purple-950">Beta</span>
                        </div>
                        <p className="mb-3 text-sm text-purple-400 dark:text-purple-200">
                            This is a beta version of the map. It is still under development, may contain bugs and major changes in the future.
                        </p>
                        <a className="text-sm text-purple-400 underline font-medium hover:text-purple-900 dark:text-purple-400 dark:hover:text-purple-300"
                           href="https://github.com/">Github Page to the Map</a>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;


