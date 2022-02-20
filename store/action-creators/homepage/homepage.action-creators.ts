import {HomepageEnums, IHomepage} from "../../../types/homepage.types";

export const homepageActions = {
    homepageInformationGot: (text: IHomepage) => ({type: HomepageEnums.GET_HOMEPAGE_INFORMATION, payload: {text}} as const),
}
