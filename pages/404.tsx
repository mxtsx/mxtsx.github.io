import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {MainLayout} from "../layouts/main.layout";

const Error = () => {
    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    return (
        <MainLayout title={'Error 404'}>
            <div className={`w-full h-screen flex flex-col justify-center items-center text-lg font-bold ${!isDarkMode ? 'text-black' : 'text-gray-300'}`}>
                <h3>
                    Page doesn't exists
                </h3>
            </div>
        </MainLayout>
    );
};

export default Error;
