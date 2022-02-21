import {instance} from "./api";
import {IHomepage} from "../types/homepage.types";

export const homepageApi = {
    getHomepage(host: string) {
        return instance(host).get<IHomepage>('homepage')
    }
}
