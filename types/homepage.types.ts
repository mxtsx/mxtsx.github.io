import {homepageInitialState} from "../store/reducers/homepage/homepage.reducer";
import {InferActionsTypes} from "../store/store";
import {Dispatch} from "redux";
import {homepageActions} from "../store/action-creators/homepage/homepage.action-creators";

interface IHomepageBlock {
    greeting: string,
    description: string
}

export interface IHomepage {
    eng: IHomepageBlock,
    ukr: IHomepageBlock,
    rus: IHomepageBlock,
    cz: IHomepageBlock,
    hr: IHomepageBlock
}

export enum HomepageEnums {
    GET_HOMEPAGE_INFORMATION = 'homepage/GET_HOMEPAGE_INFORMATION'
}

export type HomePageReducerStateType = typeof homepageInitialState
export type HomepageActionsType = InferActionsTypes<typeof homepageActions>
export type HomepageDispatchType = Dispatch<HomepageActionsType>

