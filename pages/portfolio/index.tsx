import React, {useEffect} from 'react';
import {aboutApi} from "../../api/about.api";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {useActions} from "../../hooks/useActions";

export const About = ({about}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {getAboutText} = useActions()

    useEffect(() => {
        getAboutText(about)
    }, [])

    return (
        <div>
        </div>
    );
};

export default About

export const getStaticProps: GetStaticProps = async () => {
    const res = await aboutApi.getAbout()
    const about = res.status === 200 ? res.data : null
    return {
        props: {about}
    }
}
