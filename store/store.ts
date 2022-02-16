import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import thunk from "redux-thunk";
import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import aboutReducer from "./reducers/about/about.reducer";
import contactReducer from "./reducers/contact/contact.reducer";
import headerReducer from "./reducers/header/header.reducer";
import homepageReducer from "./reducers/homepage/homepage.reducer";
import languageReducer from "./reducers/language/language.reducer";

const rootReducer = combineReducers({
    about: aboutReducer,
    contact: contactReducer,
    header: headerReducer,
    homepage: homepageReducer,
    language: languageReducer,

})

const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    } else {
        return rootReducer(state, action);
    }
};

const makeStore = () => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type RootState = ReturnType<typeof rootReducer>
export type InferActionsTypes<T> = T extends {[key: string]: (...args:any[]) => infer U} ? U : never
