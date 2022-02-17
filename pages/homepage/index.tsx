import React from 'react';
import {MainLayout} from "../../layouts/main.layout";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const About = (
    // {about}: InferGetStaticPropsType<typeof getStaticProps>
) => {
    // const {getAboutText} = useActions()
    //
    // useEffect(() => {
    //     getAboutText(about)
    // }, [])

    const {isDarkMode} = useTypedSelector(state => state.darkmode)

    return (
        <MainLayout>
            <div className={'pt-content-sm xs:pt-content'}>
                {isDarkMode ? 'dm' : '!dm'}
            </div>
        </MainLayout>
    );
};

export default About

// export const getStaticProps: GetStaticProps = async () => {
//     const res = await aboutApi.getAbout()
//     const about = res.status === 200 ? res.data : null
//     return {
//         props: {about}
//     }
// }
