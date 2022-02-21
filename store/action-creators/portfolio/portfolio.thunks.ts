import {PortfolioDispatchType} from "../../../types/portfolio.types";
import {portfolioActions} from "./portfolio.action-creators";
import {portfolioApi} from "../../../axios/portfolio.api";

export const getPortfolioInformation = () => async (dispatch: PortfolioDispatchType) => {
    try {
        const res = await portfolioApi.getPortfolio()
        if(res.status === 200) {
            dispatch(portfolioActions.portfolioInformationGot(res.data))
        }
    } catch (e) {
        console.error(e)
    }
}
