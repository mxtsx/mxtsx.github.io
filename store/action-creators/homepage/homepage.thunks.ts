import {HomepageDispatchType} from "../../../types/homepage.types";
import {homepageActions} from "./homepage.action-creators";
import {homepageApi} from "../../../axios/homepage.api";

export const getHomepageInformation = (host: string) => async (dispatch: HomepageDispatchType) => {
    try {
        const res = await homepageApi.getHomepage(host)
        dispatch(homepageActions.homepageInformationGot(res.data))
    } catch (e) {
        console.error(e)
    }
}
