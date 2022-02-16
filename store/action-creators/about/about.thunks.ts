import {AboutDispatchType, IAboutText} from "../../../types/about.types";
import {aboutActions} from "./about.action-creators";

export const getAboutText = (about: IAboutText) => (dispatch: AboutDispatchType) => {
    dispatch(aboutActions.aboutInformationGot(about))
}
