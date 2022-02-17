import React, {useEffect, useRef, useState} from 'react';
import {Select} from "./select.component";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Link from "next/link";
import {Switch} from "./switch.component";
import {BurgerButton} from "./burger-button.component";
import {useDispatch} from "react-redux";
import {headerActions} from "../store/action-creators/header/header.action-creators";
import {useOutsideClick} from "../hooks/useOutsideClick";
import {useRouter} from "next/router";

export const HeaderComponent: React.FC = () => {
    const {navbarText} = useTypedSelector(state => state.header)
    const router = useRouter()
    const currentId = navbarText?.find(el => el?.path === router?.asPath)?.id as number

    const [active, setActive] = useState<number>(currentId)
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch()

    const {language} = useTypedSelector(state => state.language)
    const wrapperRef = useRef(null)
    useOutsideClick(wrapperRef, () => setIsOpen(false))

    useEffect(() => {
        dispatch(headerActions.pageWasSelected(navbarText?.[active - 1]?.title?.[language]))
    }, [active, language])

    return (
        <header ref={wrapperRef} className={'fixed-top flex flex-col bg-white justify-between mx-auto p-7 md:flex-row md:items-center max-w-7xl shadow-md z-30'}>
            <div className={'flex flex-col w-full justify-between items-center space-y-7 xs:space-y-0 xs:flex-row'}>
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
            <div className={
                `${!isOpen ? 'hidden' : 'inline-flex'}
                flex-col
                items-center 
                justify-center 
                space-y-4 
                mt-7 
                md:inline-flex 
                md:space-y-0 
                md:mt-0 
                md:flex-row  
                md:space-x-7 
                md:ml-8`}
            >
                {navbarText?.map(el => <Link key={el.id} href={el.path}>
                    <h3 className={
                    `${el.id === active ? 'active-link' : 'header-link'} 
                    whitespace-nowrap`}
                    onClick={() => setActive(el.id)}>{el.title[language]}</h3></Link>)}
            </div>
        </header>
    );
};
