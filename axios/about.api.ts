import {instance} from "./api";

export const aboutApi = {
    getAbout() {
        return instance.get('/about')
    }
}
