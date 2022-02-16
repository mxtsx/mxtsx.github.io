import {AboutEnums, IAboutText} from "../../../types/about.types";

export const aboutActions = {
    aboutInformationGot: (text: IAboutText) => ({type: AboutEnums.GET_ABOUT_INFORMATION, payload: {text}} as const)
}
