import React, {useState} from 'react';
import {Select} from "./select.component";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Link from "next/link";
import {Switch} from "./switch.component";
import {BurgerButton} from "./burger-button.component";

export const HeaderComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {navbarText} = useTypedSelector(state => state.header)
    const {language} = useTypedSelector(state => state.language)

    return (
        <header className={'flex flex-col justify-between mx-auto p-7 md:flex-row md:items-center max-w-7xl shadow-md'}>
            <div className={'flex flex-col w-full justify-between items-center space-y-4 xs:space-y-0 xs:flex-row'}>
                <div className={'flex flex-col'}>
                    <h1 className={'whitespace-nowrap font-bold text-xl'}>Maksym Stepanets</h1>
                    <h2 className={'whitespace-nowrap'}>Junior React Developer</h2>
                </div>
                <div className={'flex items-center space-x-7 md:ml-auto'}>
                    <Select />
                    <Switch />
                    <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
            <div className={`${!isOpen ? 'hidden' : 'inline-flex'} flex flex-col items-center justify-center space-y-4 mt-7 transition ease transform duration-300 md:inline-flex md:space-y-0 md:mt-0 md:flex-row  md:space-x-7 md:ml-8`}>
                {navbarText.map(el => <Link key={el.id} href={el.path}><h3 className={'header-link whitespace-nowrap'}>{el.title[language]}</h3></Link>)}
            </div>
        </header>
    );
};
