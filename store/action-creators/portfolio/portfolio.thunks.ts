import {PortfolioDispatchType} from "../../../types/portfolio.types";
import {portfolioActions} from "./portfolio.action-creators";
import {portfolioApi} from "../../../api/portfolio.api";

export const getPortfolioInformation = (host: string) => async (dispatch: PortfolioDispatchType) => {
    try {
        const res = await portfolioApi.getPortfolio(host)
        if(res.status === 200) {
            dispatch(portfolioActions.portfolioInformationGot(res.data))
        }
    } catch (e) {
        console.error(e)
    }
}
