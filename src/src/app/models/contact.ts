import { IContactType } from 'app/models/enums/contactType';

export interface IContact {
    id: number;
    isLink: boolean;
    contactType: IContactType;
    value: string;
}
