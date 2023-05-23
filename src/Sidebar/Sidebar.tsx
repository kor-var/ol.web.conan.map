import React, {useState, useEffect, ReactNode} from 'react';

interface SidebarProps {
    children: ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {

    }, [isOpen]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="absolute flex z-50">
            {/* Sidebar Navigation */}
            <aside
                className={`fixed top-0 left-0 h-screen w-72 bg-ol-neutralQuaternary shadow-lg transition-transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <button className="absolute top-0 right-[-58px] bg-gray-100 text-ol-themePrimary rounded-md p-2 m-2 shadow-md border-2 border-ol-themePrimary hover:bg-ol-neutralPrimaryAlt"
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
                <div className="flex flex-col h-full w-full px-3 py-4 bg-ol-white dark:bg-ol-white">
                    <div className="flex flex-col items-center justify-center mb-5">
                        <img src="/conan-exiles-600x155.png" className="h-16 mr-auto sm:h-16" alt="conan exiles logo"/>
                        <span className="self-center font-semibold whitespace-nowrap dark:text-ol-neutralTertiaryAlt">Interactive Map</span>
                    </div>
                    <div className="scroll scroll-1 h-full w-full pr-2 overflow-y-auto rounded-lg">
                        <ul className="space-y-2 w-full font-medium">
                            {children}
                        </ul>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;


