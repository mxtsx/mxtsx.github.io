import {InferActionsTypes} from "../store/store";
import {aboutInitialState} from "../store/reducers/about/about.reducer";
import {Dispatch} from "redux";
import {aboutActions} from "../store/action-creators/about/about.action-creators";

interface ILanguageParams {
    title: string,
    description: string[]
}

export interface IAboutText {
    eng: ILanguageParams,
    ukr: ILanguageParams,
    rus: ILanguageParams,
    cz: ILanguageParams,
    hr: ILanguageParams,
}

export enum AboutEnums {
    GET_ABOUT_INFORMATION = 'about/GET_ABOUT_INFORMATION'
}

export type AboutReducerStateType = typeof aboutInitialState
export type AboutActionsType = InferActionsTypes<typeof aboutActions>
export type AboutDispatchType = Dispatch<AboutActionsType>
