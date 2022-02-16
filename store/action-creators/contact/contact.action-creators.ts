import {ContactEnums, IContacts} from "../../../types/contact.types";

export const contactActions = {
    contactInformationGot: (contacts: IContacts) => ({type: ContactEnums.GET_CONTACT_INFORMATION, payload: contacts} as const)
}
