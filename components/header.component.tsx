import React from 'react';
import {Select} from "./select.component";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Link from "next/link";
import {Switch} from "./switch.component";

export const HeaderComponent: React.FC = () => {
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
                </div>
            </div>
            <div className={`flex flex-col items-center justify-center space-y-4 mt-4 md:space-y-0 md:mt-0 md:flex-row  md:space-x-7 md:ml-8`}>
                {navbarText.map(el => <Link key={el.id} href={el.path}><h3 className={'header-link whitespace-nowrap'}>{el.title[language]}</h3></Link>)}
            </div>
        </header>
    );
};
