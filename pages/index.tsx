import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {Spinner} from "../components/spinner.component";
import {GetStaticProps, InferGetStaticPropsType} from "next";
import {headerApi} from "../api/header.api";
import {useActions} from "../hooks/useActions";
import {timer} from "../utils/timer.util";

export default function Home ({header}: InferGetStaticPropsType<typeof getStaticProps>) {
    const {getHeaderInformation} = useActions()

    const router = useRouter()

    useEffect(() => {
        getHeaderInformation(header)
        timer(1000).then(() => router?.push('/homepage'))
    }, [])

    return <Spinner />
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await headerApi.getHeader()
    const header = res.status === 200 ? res.data : null
    return {
        props: {header}
    }
}
