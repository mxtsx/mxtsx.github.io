import {instance} from "./api";

export const aboutApi = {
    getAbout(host: string) {
        return instance(host).get('about')
    }
}
