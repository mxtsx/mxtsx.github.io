import {DarkmodeActionsType, DarkmodeEnums, DarkmodeReducerStateType} from "../../../types/darkmode.types";
import languageReducer from "../language/language.reducer";

export const darkmodeInitialState = {
    isDarkMode: false
}

const darkmodeReducer = (state = darkmodeInitialState, action: DarkmodeActionsType): DarkmodeReducerStateType => {
    switch (action.type) {
        case DarkmodeEnums.SET_DARK_MODE:
            return {
                ...state,
                isDarkMode: action.payload.isDarkMode
            }
        default:
            return state
    }
}

export default darkmodeReducer
