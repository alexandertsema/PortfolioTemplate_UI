import { File } from 'app/models/file';

export interface ICertificate{
    id: number;
    name: string;
    authority: string;
    receiveDate: Date;
    image: File;
    pdf: File;
}
