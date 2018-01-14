import { IButton } from "app/models/button";
import { File } from 'app/models/file';

export interface IDetails {
    id: number;
    image: File;
    buttons: IButton[];
    title: string;
    subtitle?: string;
    text: string;
}