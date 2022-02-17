import React from 'react';
import {MainLayout} from "../../layouts/main.layout";

export const About = (
    // {about}: InferGetStaticPropsType<typeof getStaticProps>
) => {
    // const {getAboutText} = useActions()
    //
    // useEffect(() => {
    //     getAboutText(about)
    // }, [])

    return (
        <MainLayout>
            <div className={'pt-content-sm xs:pt-content'}>
                Main
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
