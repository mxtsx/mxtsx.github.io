import {HomepageActionsType, HomepageEnums, HomePageReducerStateType, IHomepage} from "../../../types/homepage.types";

export const homepageInitialState = {
    text: {} as {} | IHomepage
}

const homepageReducer = (state = homepageInitialState, action: HomepageActionsType): HomePageReducerStateType => {
    switch (action.type) {
        case HomepageEnums.GET_HOMEPAGE_INFORMATION:
            return {
                ...state,
                text: action.payload.text
            }
        default:
            return state
    }
}

export default homepageReducer
