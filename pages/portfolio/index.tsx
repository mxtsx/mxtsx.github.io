import React, {useEffect} from 'react';
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {useActions} from "../../hooks/useActions";
import {MainLayout} from "../../layouts/main.layout";
import {portfolioApi} from "../../api/portfolio.api";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Link from "next/link";
import {Spinner} from "../../components/spinner.component";

const Portfolio = ({portfolio}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {getPortfolioInformation} = useActions()
    const {text: information} = useTypedSelector(state => state.portfolio)
    const {language} = useTypedSelector(state => state.language)
    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    useEffect(() => {
        getPortfolioInformation(portfolio)
    }, [])

    if(!information.length) {
        return <MainLayout><Spinner /></MainLayout>
    }

    return (
        <MainLayout keywords={information?.join(" ")}>
            <div className={'pt-content-sm xs:pt-content min-h-screen pb-5 px-5 h-min w-full flex flex-col items-center'}>
                {information.map(el => {
                    return(
                        <Link key={el.id} href={`/portfolio/${el.id}`}>
                            <div className={`
                        w-full
                        flex 
                        flex-col 
                        justify-center 
                        items-center
                        text-center
                        shadow
                        ${!isDarkMode ? 'text-black' : 'text-gray-300'}
                        py-4
                        px-5
                        m-3
                        hover:opacity-70
                        space-y-3
                        cursor-pointer
                        md:text-left
                        md:hover:opacity-100
                        md:w-1/2
                        md:hover:scale-105 
                        transform
                        transition-transform
                        ease-out 
                        duration-200`}
                                 style={{backgroundColor: `${!isDarkMode ? '#f4f4f5' : '#27272a'}`}}
                                 key={el.id}>
                                <div className={`flex flex-col items-center`}>
                                    <h3 className={'font-bold text-lg'}>{el.name[language]}</h3>
                                    <h3 className={'italic'}>{el.description[language]}</h3>
                                </div>
                                <div className={'flex flex-col items-center text-center'}>
                                    <a className={'hover:text-gray-400'} href={el.url} target={"_blank"} rel={"noopener noreferrer"}>{el.url.substring(8)}</a>
                                    <a className={'hover:text-gray-400'} href={el.codeUrl} target={"_blank"} rel={"noopener noreferrer"}>Code source<span className={'hidden md:inline'}>: {el?.codeUrl.substring(8)}</span></a>
                                    {el.downloadUrl && <a className={'hover:text-gray-400'} href={el.downloadUrl} target={"_blank"} rel={"noopener noreferrer"}>Download</a>}
                                </div>
                                <div className={'flex flex-col items-center text-sm font-bold space-y-1'}>
                                    {el?.notes && el?.notes?.[language]?.map((m, index) => <span key={index}>{m}</span>)}
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </MainLayout>
    );
};

export default Portfolio

export const getStaticProps: GetStaticProps = async () => {
    const res = await portfolioApi.getPortfolio()
    const portfolio = res.status === 200 ? res.data : null
    return {
        props: {portfolio}
    }
}
