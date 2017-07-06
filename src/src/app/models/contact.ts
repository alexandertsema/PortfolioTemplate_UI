import { ContactType } from "app/models/enums/contactType";

export interface IContact {
    id: number,
    contactType: ContactType,
    value: string
}