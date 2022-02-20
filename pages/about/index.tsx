import React, {useEffect} from 'react';
import {aboutApi} from "../../api/about.api";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {useActions} from "../../hooks/useActions";
import {MainLayout} from "../../layouts/main.layout";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Spinner} from "../../components/spinner.component";

export const About = ({about}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {getAboutText} = useActions()
    const {text: info} = useTypedSelector(state => state.about)
    const {language} = useTypedSelector(state => state.language)
    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    useEffect(() => {
        getAboutText(about)
    }, [])

    if(Object.keys(info).length === 0) {
        return <MainLayout><Spinner /></MainLayout>
    }

    return (
        <MainLayout keywords={info[language]?.description.join(" ")}>
            <div className={`pt-content-sm xs:pt-content w-full min-h-screen h-min px-7 pb-7 space-y-4 md:pb-0 ${!isDarkMode ? 'text-black' : 'text-gray-300'}`}>
                {info[language]?.description.map((d, i) => <div key={i}>{d}</div>)}
            </div>
        </MainLayout>
    );
};

export default About

export const getStaticProps: GetStaticProps = async () => {
    const res = await aboutApi.getAbout()
    const about = res.status === 200 ? res.data : null
    return {
        props: {about}
    }
}
