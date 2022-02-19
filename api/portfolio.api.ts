import {instance} from "./api";

export const portfolioApi = {
    getPortfolio() {
        return instance.get('/portfolio')
    }
}
