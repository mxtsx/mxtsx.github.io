import {IPortfolio, PortfolioDispatchType} from "../../../types/portfolio.types";
import {portfolioActions} from "./portfolio.action-creators";

export const getPortfolioInformation = (portfolio: IPortfolio) => (dispatch: PortfolioDispatchType) => {
    dispatch(portfolioActions.portfolioInformationGot(portfolio))
}
