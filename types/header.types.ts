import {headerInitialState} from "../store/reducers/header/header.reducer";
import {InferActionsTypes} from "../store/store";
import {headerActions} from "../store/action-creators/header/header.action-creators";
import {ILanguages} from "./types";

export interface IHeaderBlock {
    title: ILanguages,
    path: string,
    id: number

}

export enum HeaderEnums {
    SET_SELECTED_PAGE = 'header/SET_SELECTED_PAGE',
    SET_IS_LOADING = 'header/SET_IS_LOADING'
}

export type HeaderReducerStateType = typeof headerInitialState
export type HeaderActionsType = InferActionsTypes<typeof headerActions>
