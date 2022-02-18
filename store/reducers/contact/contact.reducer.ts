import {ContactReducerStateType} from "../../../types/contact.types";
import github from "../../../public/github.svg";
import linkedin from "../../../public/linkedin-round.svg";
import email from "../../../public/email-round.svg";
import {AnyAction} from "redux";

export const contactInitialState = {
    contacts: [
        {
            image: github,
            url: "https://github.com/mxtsx",
            name: "Github",
            id: 1
        },
        {
            image: linkedin,
            url: "https://www.linkedin.com/in/mxtsx/",
            name: "LinkedIn",
            id: 2
        },
        {
            image: email,
            url: "mailto: mxtsx@pm.me",
            name: "mxtsx@pm.me",
            id: 3
        }
    ]
}

const contactReducer = (state = contactInitialState, action: AnyAction): ContactReducerStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export default contactReducer
