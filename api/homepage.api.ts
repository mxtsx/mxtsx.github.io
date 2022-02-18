import {instance} from "./api";
import {IHomepage} from "../types/homepage.types";

export const homepageApi = {
    getHomepage() {
        return instance.get<IHomepage>('/homepage')
    }
}
