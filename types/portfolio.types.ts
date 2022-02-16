import {portfolioInitialState} from "../store/reducers/portfolio/portfolio.reducer";
import {InferActionsTypes} from "../store/store";
import {Dispatch} from "redux";
import {portfolioActions} from "../store/action-creators/portfolio/portfolio.action-creators";
import {ILanguages} from "./types";

interface IPortfolioItem {
    id: number,
    name: ILanguages,
    description: ILanguages,
    url: string,
    codeUrl: string,
    downloadUrl?: string,
    notes?: {
        eng: string[],
        ukr: string[],
        rus: string[],
        cz: string[],
        hr: string[]
    }
}

export interface IPortfolio {
    text: IPortfolioItem[]
}

export enum PortfolioEnum {
    GET_PORTFOLIO_INFORMATION = 'portfolio/GET_PORTFOLIO_INFORMATION'
}

export type PortfolioReducerStateType = typeof portfolioInitialState
export type PortfolioActionsType = InferActionsTypes<typeof portfolioActions>
export type PortfolioDispatchType = Dispatch<PortfolioActionsType>
