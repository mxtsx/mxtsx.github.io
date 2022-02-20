import React from 'react';
import {GetStaticProps, NextPage} from "next";
import {MainLayout} from "../../layouts/main.layout";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Spinner} from "../../components/spinner.component";
import {NextThunkDispatch, RootState, wrapper} from "../../store/store";
import {getAboutText} from "../../store/action-creators/about/about.thunks";

export const About: NextPage<RootState> = React.memo(() => {
    const {text: info} = useTypedSelector(state => state.about)
    const {language} = useTypedSelector(state => state.language)
    const {isDarkMode} = useTypedSelector(state => state.darkmode)

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
})

export default About

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(store => async () => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(getAboutText());
    return {
        props: {}
    }
});
