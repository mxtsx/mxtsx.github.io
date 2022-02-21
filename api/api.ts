import axios from "axios";

export const instance = (host: string) => {
    let http
    if (host.includes("localhost")){
        http = 'http';
    }
    else {
        http = 'https';
    }
    return axios.create({
        baseURL: `${http}://${host}/api/`
    })
}
