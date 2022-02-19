import React from 'react';

interface IProps {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    isDarkMode: boolean
}

export const BurgerButton: React.FC<IProps> = ({isOpen, setIsOpen, isDarkMode}) => {
    const genericHamburgerLine = `h-1 w-8 my-1 rounded-full ${!isDarkMode ? 'bg-black' : 'bg-gray-300'} transition ease transform duration-300`;

    return (
        <button
            className="md:hidden flex flex-col h-9 w-9 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
        </button>
    );
};
