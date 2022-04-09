import React from 'react';
import {MainLayout} from "../../layouts/main.layout";
import {useRouter} from "next/router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {screenshotName} from "../../utils/screenshot-name.util";
import {GetServerSideProps} from "next";
import {NextThunkDispatch, wrapper} from "../../store/store";
import {getPortfolioInformation} from "../../store/action-creators/portfolio/portfolio.thunks";

const Project: React.FC = React.memo(() => {
    const router = useRouter()

    const {id} = router?.query
    const {text: information} = useTypedSelector(state => state.portfolio)
    const {language} = useTypedSelector(state => state.language)
    const project = information.find(p => !!id ? p.id === +id : undefined)
    const isImage = !!project?.screenshots?.[0]

    return (
        <MainLayout title={project?.name[language]}>
            <div className={'relative w-full min-h-screen h-min pt-content-sm xs:pt-content px-4 flex flex-col items-center'}>
                {isImage
                    ? project?.screenshots?.map(s => (
                        <div key={s} className={`
                        w-full 
                        mb-5 
                        cursor-grab
                        shadow-md
                        sm:w-3/4
                        sm:hover:scale-105
                        sm:hover:z-10
                        transform 
                        transition 
                        ease-out 
                        duration-200 
                        ${!project.isMobile ? "sm:w-2/3 " : "sm:w-1/4"}
                        `}>
                            <img src={s as string}
                                 className={`w-full h-auto`}
                                 alt={screenshotName(s)}/>
                        </div>
                    ))
                    : <h3>No images were found</h3>}
            </div>
        </MainLayout>
    )
})

export default Project

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async (context) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(getPortfolioInformation(context.req.headers.host as string));
    return {
        props: {}
    }
});