import React, {useEffect, useState} from 'react';

interface IProps {
    isDarkMode: boolean
}

export const Main: React.FC<IProps> = React.memo(({isDarkMode, children, ...props}) => {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
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
            max-w-7xl
            mx-auto
            shadow-md
            `}>
            <div className={`
            h-full
            w-full
            flex 
            flex-col 
            justify-start 
            items-center
            ${!isLoaded ? 'opacity-0' : 'opacity-100'}
            transition-opacity
            ease-out
            duration-1000
            `}
                 {...props}>
                {children}
            </div>
        </main>
    );
})
