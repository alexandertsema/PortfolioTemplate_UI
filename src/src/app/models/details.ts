import { IButton } from 'app/models/button';
import { IFile } from 'app/models/file';

export interface IDetails {
    id: number;
    image: IFile;
    buttons: IButton[];
    title: string;
    subtitle?: string;
    text: string;
}
