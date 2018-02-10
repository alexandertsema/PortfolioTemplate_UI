import { IFile } from 'app/models/file';

export interface ICertificate {
    id: number;
    name: string;
    authority: string;
    receiveDate: Date;
    image: File;
    pdf: IFile;
}
