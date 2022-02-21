import {instance} from "./api";

export const portfolioApi = {
    getPortfolio(host: string) {
        return instance(host).get('portfolio')
    }
}
