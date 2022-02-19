import React, {useEffect} from 'react';
import {MainLayout} from "../../layouts/main.layout";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {useActions} from "../../hooks/useActions";
import {homepageApi} from "../../api/homepage.api";
import {isMailUtil} from "../../utils/isMail.util";
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
            <div className={`w-full h-screen flex flex-col justify-center items-center px-7 pt-9 space-y-5 xs:space-y-3 xs:pt-0`}>
                <div className={`text-lg text-center xs:text-left ${!isDarkMode ? 'text-black' : 'text-gray-300'}`}>
                    <h3>{homepageInfo[language]?.greeting}</h3>
                    <h3>{homepageInfo[language]?.description}</h3>
                </div>
                <div className={'flex space-x-7'}>
                    {contacts?.map((m: IContact) => {
                        return (
                            <a key={m.id} className={'hover:opacity-70 md:hover:scale-110 transform transition ease-out duration-200'} href={m.url} target={isMailUtil(m.url) ? "_self" : "_blank"} rel={"noopener noreferrer"}>
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
