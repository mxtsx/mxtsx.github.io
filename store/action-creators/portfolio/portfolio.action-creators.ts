import {IPortfolio, PortfolioEnum} from "../../../types/portfolio.types";

export const portfolioActions = {
    portfolioInformationGot: (text: IPortfolio) => ({type: PortfolioEnum.GET_PORTFOLIO_INFORMATION, payload: text} as const)
}
