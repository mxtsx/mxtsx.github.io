import {HomepageDispatchType, IHomepage} from "../../../types/homepage.types";
import {homepageActions} from "./homepage.action-creators";

export const getHomepageInformation = (homepage: IHomepage) => (dispatch: HomepageDispatchType) => {
    dispatch(homepageActions.homepageInformationGot(homepage))
}
