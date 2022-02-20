import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {Spinner} from "../components/spinner.component";
import Head from "next/head";
import {timer} from "../utils/timer.util";

export default function Home () {
    const router = useRouter()

    useEffect(() => {
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
