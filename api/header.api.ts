import {instance} from "./api";
import {IHeader} from "../types/header.types";

export const headerApi = {
    getHeader() {
        return instance.get<IHeader>('/header')
    }
}
