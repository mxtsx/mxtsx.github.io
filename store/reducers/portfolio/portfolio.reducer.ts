import {
    IPortfolio,
    PortfolioActionsType,
    PortfolioEnum,
    PortfolioReducerStateType
} from "../../../types/portfolio.types";

export const portfolioInitialState = {
    text: [] as [] | IPortfolio
}

const portfolioReducer = (state = portfolioInitialState, action: PortfolioActionsType): PortfolioReducerStateType => {
    switch (action.type) {
        case PortfolioEnum.GET_PORTFOLIO_INFORMATION:
            return {
                ...state,
                text: action.payload.text as [] | IPortfolio
            }
        default:
            return state
    }
}

export default portfolioReducer
