import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {Spinner} from "../components/spinner.component";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {headerApi} from "../api/header.api";
import {useActions} from "../hooks/useActions";
import {timer} from "../utils/timer.util";
import Head from "next/head";

export default function Home ({header}: InferGetStaticPropsType<typeof getStaticProps>) {
    const {getHeaderInformation, setIsLoading} = useActions()

    const router = useRouter()

    useEffect(() => {
        setIsLoading(true)
        getHeaderInformation(header)
        setIsLoading(false)
        timer(1000).then(() => router?.push('/homepage'))
    }, [])

    return(
        <>
            <Head>
                <title>Welcome</title>
            </Head>
            <Spinner />
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
