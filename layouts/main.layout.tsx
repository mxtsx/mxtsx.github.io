import React, {useEffect} from 'react';
import Head from "next/head";
import {HeaderComponent} from "../components/header.component";
import {useRouter} from "next/router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Spinner} from "../components/spinner.component";

interface IProps {
    keywords?: string;
}

export const MainLayout: React.FC<IProps> = ({keywords, children}) => {
    const {selectPage, isLoading} = useTypedSelector(state => state.header)
    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    const router = useRouter()

    const {navbarText} = useTypedSelector(state => state.header)

    useEffect(() => {
        if(!navbarText || !navbarText?.length) {
            router?.push('/')
        }
    }, [])

    if(isLoading || !navbarText.length) {
        return <Spinner />
    }

    return (
        <div style={{backgroundColor: `${!isDarkMode ? '#fdfdfd' : '#3f3f46'}`}}>
            <Head>
                <title>{selectPage}</title>
                <meta name={'keywords'} content={`Maksym Stepanets, Junior, React Developer, ${keywords}`}/>
            </Head>
            <HeaderComponent />
            <main
                style={{backgroundColor: `${!isDarkMode ? '#fafafa' : 'rgb(82 82 91)'}`}}
                className={`min-h-screen h-min flex flex-col justify-start mx-auto items-center max-w-7xl shadow-md`}>
                {children}
            </main>
        </div>
    )
};
