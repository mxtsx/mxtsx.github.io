import {DarkmodeEnums} from "../../../types/darkmode.types";

export const darkmodeActions = {
    darkModeChanged: (isDarkMode: boolean) => ({type: DarkmodeEnums.SET_DARK_MODE, payload: {isDarkMode}} as const)
}
