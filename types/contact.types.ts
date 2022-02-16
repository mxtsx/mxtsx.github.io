import {contactInitialState} from "../store/reducers/contact/contact.reducer";
import {InferActionsTypes} from "../store/store";
import {Dispatch} from "redux";
import {contactActions} from "../store/action-creators/contact/contact.action-creators";
import github from "*.svg";

interface IContact {
    image: string,
    url: string,
    name: string,
    id: number
}

export interface IContacts {
    contacts: IContact[]
}

export enum ContactEnums {
    GET_CONTACT_INFORMATION = 'contact/GET_CONTACT_INFORMATION'
}

export type ContactReducerStateType = typeof contactInitialState
export type ContactActionsType = InferActionsTypes<typeof contactActions>
export type ContactDispatchType = Dispatch<ContactActionsType>
