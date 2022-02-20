import {HeaderEnums} from "../../../types/header.types";

export const headerActions = {
    pageWasSelected: (page: string) => ({type: HeaderEnums.SET_SELECTED_PAGE, payload: {page}} as const),
    isLoadingSet: (isLoading: boolean) => ({type: HeaderEnums.SET_IS_LOADING, payload: {isLoading}} as const),
}
