import {InferActionsTypes} from "../store/store";
import {Dispatch} from "redux";
import {darkmodeInitialState} from "../store/reducers/darkmode/darkmode.reducer";
import {darkmodeActions} from "../store/action-creators/darkmode/darkmode.action-creators";

export enum DarkmodeEnums {
    SET_DARK_MODE = 'darkmode/SET_DARK_MODE'
}

export type DarkmodeReducerStateType = typeof darkmodeInitialState
export type DarkmodeActionsType = InferActionsTypes<typeof darkmodeActions>
export type DarkmodeDispatchType = Dispatch<DarkmodeActionsType>
