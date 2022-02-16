import {
    LanguageActionsType,
    LanguageEnums,
    LanguageReducerStateType,
    LanguageType
} from "../../../types/language.types";

export const languageInitialState = {
    language: "eng" as LanguageType
}

const languageReducer = (state = languageInitialState, action: LanguageActionsType): LanguageReducerStateType => {
    switch (action.type) {
        case LanguageEnums.CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.payload.language
            }
        default:
            return state
    }
}

export default languageReducer
