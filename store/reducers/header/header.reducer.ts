import {HeaderActionsType, HeaderEnums, HeaderReducerStateType, IHeaderBlock} from "../../../types/header.types";

export const headerInitialState = {
    isLoading: false,
    error: null as string | null,
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
        case HeaderEnums.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return state
    }
}

export default headerReducer
