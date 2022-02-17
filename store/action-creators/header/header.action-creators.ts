import {HeaderEnums, IHeader} from "../../../types/header.types";

export const headerActions = {
    headerInformationGot: (info: IHeader) => ({type: HeaderEnums.GET_HEADER_INFORMATION, payload: info} as const),
    pageWasSelected: (page: string) => ({type: HeaderEnums.SET_SELECTED_PAGE, payload: {page}} as const)
}
