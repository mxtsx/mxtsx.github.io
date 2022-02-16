import {HeaderDispatchType, IHeader} from "../../../types/header.types";
import {headerActions} from "./header.action-creators";

export const getHeaderInformation = (text: IHeader) => (dispatch: HeaderDispatchType) => {
    dispatch(headerActions.headerInformationGot(text))
}
