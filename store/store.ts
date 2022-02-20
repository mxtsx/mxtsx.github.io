import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import aboutReducer from "./reducers/about/about.reducer";
import contactReducer from "./reducers/contact/contact.reducer";
import headerReducer from "./reducers/header/header.reducer";
import homepageReducer from "./reducers/homepage/homepage.reducer";
import languageReducer from "./reducers/language/language.reducer";
import darkmodeReducer from "./reducers/darkmode/darkmode.reducer";
import portfolioReducer from "./reducers/portfolio/portfolio.reducer";

const rootReducer = combineReducers({
    about: aboutReducer,
    contact: contactReducer,
    header: headerReducer,
    homepage: homepageReducer,
    portfolio: portfolioReducer,
    language: languageReducer,
    darkmode: darkmodeReducer
})

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload,
        }
        if (state) {
            nextState.language.language = state.language.language
            nextState.darkmode.isDarkMode = state.darkmode.isDarkMode
        }
        return nextState
    } else {
        return rootReducer(state, action);
    }
};

const makeStore = () => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type RootState = ReturnType<typeof rootReducer>
export type InferActionsTypes<T> = T extends {[key: string]: (...args:any[]) => infer U} ? U : never
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
