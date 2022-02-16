import {AboutActionsType, AboutEnums, AboutReducerStateType, IAboutText} from "../../../types/about.types";

export const aboutInitialState = {
    text: {} as IAboutText
}

const aboutReducer = (state = aboutInitialState, action: AboutActionsType): AboutReducerStateType => {
    switch (action.type) {
        case AboutEnums.GET_ABOUT_INFORMATION:
            return {
                ...state,
                text: action.payload.text
            }
        default:
            return state
    }
}

export default aboutReducer
