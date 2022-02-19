import React from 'react';
import {MainLayout} from "../../layouts/main.layout";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {isMail} from "../../utils/isMail";

const Contacts = () => {
    const {contacts} = useTypedSelector(state => state.contact)
    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    return (
        <MainLayout>
            <div className={'w-full h-screen flex flex-col justify-center items-center'}>
                <div className={'space-y-4'}>
                    {contacts.map((m) => {
                        return(
                            <div key={m.id} className={'flex items-center space-x-3'}>
                                <a href={m.url} className={'hover:opacity-70 md:hover:scale-110 transform transition ease-out duration-200'} target={isMail(m.url) ? "_self" : "_blank"} rel={"noopener noreferrer"}>
                                    <img src={m.image.src} alt={m.name} />
                                </a>
                                <a href={m.url} target={isMail(m.url) ? "_self" : "_blank"} className={`${!isDarkMode ? 'text-black' : 'text-gray-300'} hover:opacity-70 md:hover:scale-105 transform transition ease-out duration-200`} rel={"noopener noreferrer"}>{m.name}</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </MainLayout>
    );
};

export default Contacts
