import {
    IPortfolioItem,
    PortfolioActionsType,
    PortfolioEnum,
    PortfolioReducerStateType
} from "../../../types/portfolio.types";

export const portfolioInitialState = {
    text: [] as IPortfolioItem[]
}

const portfolioReducer = (state = portfolioInitialState, action: PortfolioActionsType): PortfolioReducerStateType => {
    switch (action.type) {
        case PortfolioEnum.GET_PORTFOLIO_INFORMATION:
            return {
                ...state,
                text: action?.payload?.text?.map(el => el) as IPortfolioItem[]
            }
        default:
            return state
    }
}

export default portfolioReducer
