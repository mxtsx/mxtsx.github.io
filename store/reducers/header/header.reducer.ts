import {HeaderActionsType, HeaderEnums, HeaderReducerStateType, IHeaderBlock} from "../../../types/header.types";

export const headerInitialState = {
    isLoading: false,
    error: null as string | null,
    navbarText: [
        {
            title: {
                eng: "Home",
                ukr: "Головна сторінка",
                rus: "Главная страница",
                cz: "Domů",
                hr: "Početna stranica"
            },
            path: "/homepage",
            id: 1
        },
        {
            title: {
                eng: "About",
                ukr: "Про мене",
                rus: "Обо мне",
                cz: "O mně",
                hr: "O meni"
            },
            path: "/about",
            id: 2
        },
        {
            title: {
                eng: "Portfolio",
                ukr: "Портфоліо",
                rus: "Портфолио",
                cz: "Portfolio",
                hr: "Portfolio"
            },
            path: "/portfolio",
            id: 3
        },
        {
            title: {
                eng: "Contact",
                ukr: "Контакти",
                rus: "Контакты",
                cz: "Kontakty",
                hr: "Kontakt"
            },
            path: "/contacts",
            id: 4
        }
    ],
    selectPage: ''
}

const headerReducer = (state = headerInitialState, action: HeaderActionsType): HeaderReducerStateType => {
    switch (action.type) {
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
