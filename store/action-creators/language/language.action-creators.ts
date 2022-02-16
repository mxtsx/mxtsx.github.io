import {LanguageEnums, LanguageType} from "../../../types/language.types";

export const languageActions = {
    languageChanged: (language: LanguageType) => ({type: LanguageEnums.CHANGE_LANGUAGE, payload: {language}} as const)
}
