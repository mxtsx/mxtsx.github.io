import github from "../../../public/github.svg"
import linkedin from "../../../public/linkedin-round.svg"
import email from "../../../public/email-round.svg"
import {ContactActionsType, ContactEnums, ContactReducerStateType, IContacts} from "../../../types/contact.types";

export const contactInitialState = {
    contacts: [] as [] | IContacts
}

const contactReducer = (state = contactInitialState, action: ContactActionsType): ContactReducerStateType => {
    switch (action.type) {
        case ContactEnums.GET_CONTACT_INFORMATION:
            return {
                ...state,
                contacts: action.payload.contacts as [] | IContacts
            }
        default:
            return state
    }
}

export default contactReducer
