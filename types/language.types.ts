import {languageInitialState} from "../store/reducers/language/language.reducer";
import {InferActionsTypes} from "../store/store";
import {Dispatch} from "redux";
import {languageActions} from "../store/action-creators/language/language.action-creators";

export type LanguageType = "eng" | "ukr" | "rus" | "cz" | "hr"

export enum LanguageEnums {
    CHANGE_LANGUAGE = "language/CHANGE_LANGUAGE"
}

export type LanguageReducerStateType = typeof languageInitialState
export type LanguageActionsType = InferActionsTypes<typeof languageActions>
export type LanguageDispatchType = Dispatch<LanguageActionsType>
