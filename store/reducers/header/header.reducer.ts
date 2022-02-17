import {HeaderActionsType, HeaderEnums, HeaderReducerStateType, IHeaderBlock} from "../../../types/header.types";

export const headerInitialState = {
    navbarText: [] as [] | IHeaderBlock[],
    selectPage: ''
}

const headerReducer = (state = headerInitialState, action: HeaderActionsType): HeaderReducerStateType => {
    switch (action.type) {
        case HeaderEnums.GET_HEADER_INFORMATION:
            return {
                ...state,
                navbarText: action.payload?.navbarText
            }
        case HeaderEnums.SET_SELECTED_PAGE:
            return {
                ...state,
                selectPage: action.payload.page
            }
        default:
            return state
    }
}

export default headerReducer
