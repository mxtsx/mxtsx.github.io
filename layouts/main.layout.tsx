import React from 'react';
import Head from "next/head";
import {HeaderComponent} from "../components/header.component";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Main} from "../components/main.component";

interface IProps {
    title?: string;
    keywords?: string;
}

export const MainLayout: React.FC<IProps> = ({title, keywords, children, ...props}) => {
    const {selectPage} = useTypedSelector(state => state.header)
    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    return (
        <div style={{backgroundColor: `${!isDarkMode ? '#fdfdfd' : '#3f3f46'}`}}>
            <Head>
                <title>{!!title ? title : selectPage}</title>
                <meta name={'keywords'} content={`Maksym Stepanets, Junior, React Developer, NextJS, Work, Freelance, ${keywords}`}/>
            </Head>
            <HeaderComponent />
            <Main isDarkMode={isDarkMode} {...props}>
                {children}
            </Main>
        </div>
    )
};
