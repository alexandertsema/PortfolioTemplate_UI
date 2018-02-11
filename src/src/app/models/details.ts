import { IButton } from 'app/models/button';
import { IFile } from 'app/models/file';
import { IDetailsType } from 'app/models/enums/detailsType';

export interface IDetails {
    id: number;
    type: IDetailsType;
    image: IFile;
    buttons: IButton[];
    title: string;
    subtitle?: string;
    text: string;
}
