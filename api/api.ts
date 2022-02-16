import axios from "axios";

export const instance = axios.create({
    baseURL: `http://${process.env.ENV_API}`
})
