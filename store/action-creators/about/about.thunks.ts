import {AboutDispatchType, IAboutText} from "../../../types/about.types";
import {aboutActions} from "./about.action-creators";
import {aboutApi} from "../../../axios/about.api";

export const getAboutText = () => async (dispatch: AboutDispatchType) => {
    try {
        const res = await aboutApi.getAbout()
        if(res.status === 200) {
            dispatch(aboutActions.aboutInformationGot(res.data))
        }
    } catch (e) {
        console.error(e)
    }
}
