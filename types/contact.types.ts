import {contactInitialState} from "../store/reducers/contact/contact.reducer";

export interface IContact {
    image: {
        src: string
        width: number,
        height: number
    },
    url: string,
    name: string,
    id: number
}

export interface IContacts {
    contacts: IContact[]
}

export type ContactReducerStateType = typeof contactInitialState
