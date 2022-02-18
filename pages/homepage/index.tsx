import React, {useEffect} from 'react';
import {MainLayout} from "../../layouts/main.layout";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {useActions} from "../../hooks/useActions";
import {homepageApi} from "../../api/homepage.api";
import {isMail} from "../../utils/isMail";
import {IContact} from "../../types/contact.types";

const Homepage = (
    {homepage}: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const {getHomepageInformation} = useActions()
    const {text: homepageInfo} = useTypedSelector(state => state.homepage)
    const {contacts} = useTypedSelector(state => state.contact)
    const {language} = useTypedSelector(state => state.language)

    useEffect(() => {
        getHomepageInformation(homepage)
    }, [])

    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    return (
        <MainLayout>
            <div className={`w-full h-screen flex flex-col justify-center items-center px-7`}>
                <div className={`text-lg text-center xs:text-left ${!isDarkMode ? 'text-black' : 'text-gray-300'}`}>
                    <h3>{homepageInfo[language]?.greeting}</h3>
                    <h3>{homepageInfo[language]?.description}</h3>
                </div>
                <div className={'flex p-3 space-x-7'}>
                    {contacts?.map((m: IContact) => {
                        return (
                            <a key={m.id} className={'hover:opacity-70'} href={m.url} target={isMail(m.url) ? "_self" : "_blank"} rel={"noopener noreferrer"}>
                                <img src={m.image.src} alt={m.name}/>
                            </a>
                        )
                    })}
                </div>
            </div>
        </MainLayout>
    );
};

export default Homepage

export const getStaticProps: GetStaticProps = async () => {
    const res = await homepageApi.getHomepage()
    const homepage = res.status === 200 ? res.data : null
    return {
        props: {homepage}
    }
}
