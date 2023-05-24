import React, {useState, useEffect, ReactNode} from 'react';

interface SidebarProps {
    children: ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [theme, setTheme] = useState(
        // Check user's OS preference
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
    );

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            if(document.firstElementChild){
                document.firstElementChild.setAttribute('class', storedTheme)
            }
        }
    }, [isOpen, theme]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if(document.firstElementChild){
            document.firstElementChild.setAttribute('class', newTheme)
        }
    };

    return (
        <div className="absolute flex z-50">
            {/* Sidebar Navigation */}
            <aside
                className={`fixed top-0 left-0 h-screen w-72 shadow-lg transition-transform  ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="grid grid-cols-1 absolute top-0 right-[-58px]">
                    <div>
                        <button className="bg-ol-neutralPrimary dark:bg-ol-white text-ol-themePrimary hover:bg-ol-neutralPrimaryAlt dark:hover:bg-ol-neutralLighter rounded-md p-2 m-2 shadow-md border-2 border-ol-themePrimary"
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
                    </div>
                    <div>
                        <button className="bg-ol-neutralPrimary dark:bg-ol-white hover:bg-ol-neutralPrimaryAlt dark:hover:bg-ol-neutralLighter rounded-md p-2 m-2 shadow-md border-2 border-ol-themePrimary"
                                onClick={toggleTheme}
                        >
                            {theme === 'light' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6 text-blue-400">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6 text-yellow-500">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col h-full w-full px-3 py-4 bg-ol-neutralPrimary dark:bg-ol-white">
                    <div className="flex flex-col items-center justify-center mb-5">
                        <img src={`${window.location.href}/conan-exiles-600x155.png`} className="h-16 mr-auto sm:h-16" alt="conan exiles logo"/>
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


