import {HeaderEnums} from "../../../types/header.types";

export const headerActions = {
    pageWasSelected: (page: string) => ({type: HeaderEnums.SET_SELECTED_PAGE, payload: {page}} as const),
}
