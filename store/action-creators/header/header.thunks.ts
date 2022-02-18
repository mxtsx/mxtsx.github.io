import {HeaderDispatchType, IHeader} from "../../../types/header.types";
import {headerActions} from "./header.action-creators";

export const setIsLoading = (isLoading: boolean) => (dispatch: HeaderDispatchType) => {
    dispatch(headerActions.isLoadingSet(isLoading))
}

export const getHeaderInformation = (text: IHeader) => (dispatch: HeaderDispatchType) => {
    dispatch(headerActions.headerInformationGot(text))
}
