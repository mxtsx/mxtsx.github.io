import React from 'react';
import {GetServerSideProps, NextPage} from "next";
import {MainLayout} from "../../layouts/main.layout";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Link from "next/link";
import {Spinner} from "../../components/spinner.component";
import {NextThunkDispatch, RootState, wrapper} from "../../store/store";
import {getPortfolioInformation} from "../../store/action-creators/portfolio/portfolio.thunks";

const Portfolio: NextPage<RootState> = React.memo(() => {
    const {text: information} = useTypedSelector(state => state.portfolio)
    const {language} = useTypedSelector(state => state.language)
    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    if(!information.length) {
        return <MainLayout><Spinner /></MainLayout>
    }

    return (
        <MainLayout keywords={information.map(el => `${el.name?.[language]} ${el.url} ${el.description?.[language]}`).join(" ")}>
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
                                    <a className={'hover:text-gray-400'} onClick={(e) => e.stopPropagation()} href={el.url} target={"_blank"} rel={"noopener noreferrer"}>{el.url.substring(8)}</a>
                                    <a className={'hover:text-gray-400'} onClick={(e) => e.stopPropagation()} href={el.codeUrl} target={"_blank"} rel={"noopener noreferrer"}>Code source<span className={'hidden md:inline'}>: {el?.codeUrl.substring(8)}</span></a>
                                    {el.downloadUrl && <a className={'hover:text-gray-400'} onClick={(e) => e.stopPropagation()} href={el.downloadUrl} target={"_blank"} rel={"noopener noreferrer"}>Download</a>}
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
})

export default Portfolio

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(getPortfolioInformation(context.req.headers.host as string));
    return {
        props: {}
    }
});
