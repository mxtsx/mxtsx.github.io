import React from 'react';
import {MainLayout} from "../../layouts/main.layout";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {GetServerSideProps, NextPage} from "next";
import {isMailUtil} from "../../utils/isMail.util";
import {IContact} from "../../types/contact.types";
import {Spinner} from "../../components/spinner.component";
import {NextThunkDispatch, RootState, wrapper} from "../../store/store";
import {getHomepageInformation} from "../../store/action-creators/homepage/homepage.thunks";

const Homepage: NextPage<RootState> = React.memo(() => {
    const {text: homepageInfo} = useTypedSelector(state => state.homepage)
    const {contacts} = useTypedSelector(state => state.contact)
    const {language} = useTypedSelector(state => state.language)
    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    if(Object.keys(homepageInfo).length === 0) {
        return <MainLayout><Spinner /></MainLayout>
    }

    return (
        <MainLayout keywords={homepageInfo[language]?.description}>
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
})

export default Homepage

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(getHomepageInformation(context.req.headers.host as string));
    return {
        props: {}
    }
});
