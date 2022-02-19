import React, {useLayoutEffect, useState} from 'react';

interface IProps {
    isDarkMode: boolean
}

export const Main: React.FC<IProps> = ({isDarkMode, children}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    useLayoutEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        })
    }, [])
    return (
        <main
            style={{backgroundColor: `${!isDarkMode ? '#fafafa' : 'rgb(82 82 91)'}`}}
            className={`
            min-h-screen
            h-min 
            flex 
            flex-col 
            justify-start 
            mx-auto 
            items-center 
            max-w-7xl 
            shadow-md
            ${!isLoaded ? 'opacity-0' : 'opacity-100'}
            transition
            ease-out
            duration-1000
            `}>
            {children}
        </main>
    );
};
