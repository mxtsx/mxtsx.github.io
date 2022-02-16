import {
    HeaderActionsType,
    HeaderEnums,
    HeaderReducerStateType,
    IHeader,
    IHeaderBlock
} from "../../../types/header.types";

export const headerInitialState = {
    navbarText: [] as [] | IHeaderBlock[],
    selectLabel: {
        eng: "Lang",
        ukr: "Мова",
        rus: "Язык",
        cz: "Jazyk",
        hr: "Jezik"
    }
}

const headerReducer = (state = headerInitialState, action: HeaderActionsType): HeaderReducerStateType => {
    switch (action.type) {
        case HeaderEnums.GET_HEADER_INFORMATION:
            return {
                ...state,
                navbarText: action.payload.navbarText.map(el => el)
            }
        default:
            return state
    }
}

export default headerReducer
