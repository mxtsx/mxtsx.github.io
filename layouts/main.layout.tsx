import React, {useEffect} from 'react';
import Head from "next/head";
import {HeaderComponent} from "../components/header.component";
import {useRouter} from "next/router";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface IProps {
    keywords?: string;
}

export const MainLayout: React.FC<IProps> = ({keywords, children}) => {
    const {selectPage} = useTypedSelector(state => state.header)

    const router = useRouter()

    const {navbarText} = useTypedSelector(state => state.header)

    useEffect(() => {
        if(!navbarText || !navbarText?.length) {
            router?.push('/')
        }
    }, [])

    return (
        <>
            <Head>
                <title>{selectPage}</title>
                <meta name={'keywords'} content={`Maksym Stepanets, Junior, React Developer, ${keywords}`}/>
            </Head>
            <HeaderComponent />
            <main
                className={
                'h-screen bg-white flex flex-col justify-start mx-auto items-center max-w-7xl shadow-md'
            }>
                {children}
            </main>
        </>
    )
};
