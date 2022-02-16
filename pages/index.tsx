import Head from 'next/head'
import React, {useEffect} from "react";
import {HeaderComponent} from "../components/header.component";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {headerApi} from "../api/header.api";
import {useActions} from "../hooks/useActions";

export default function Home ({header}: InferGetStaticPropsType<typeof getStaticProps>) {
    const {getHeaderInformation} = useActions()

    useEffect(() => {
        getHeaderInformation(header)
    }, [])

    return (
        <>
            <Head>
                <title>Main</title>
            </Head>
            <HeaderComponent />
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await headerApi.getHeader()
    const header = res.status === 200 ? res.data : null
    return {
        props: {header}
    }
}
