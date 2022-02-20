import React from 'react';
import {MainLayout} from "../../layouts/main.layout";
import {useRouter} from "next/router";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {screenshotName} from "../../utils/screenshot-name.util";

const Project: React.FC = () => {
    const router = useRouter()

    const {id} = router?.query
    const {text: information} = useTypedSelector(state => state.portfolio)
    const project = information.find(p => !!id ? p.id === +id : undefined)
    const isImage = !!project?.screenshots?.[0]

    return (
        <MainLayout>
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
}

export default Project
