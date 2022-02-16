import {HeaderEnums, IHeader} from "../../../types/header.types";

export const headerActions = {
    headerInformationGot: (info: IHeader) => ({type: HeaderEnums.GET_HEADER_INFORMATION, payload: info} as const)
}
