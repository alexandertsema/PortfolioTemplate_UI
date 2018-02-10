import { IFile } from 'app/models/file';

export interface ISummary {
    id: number;
    title: string;
    description: string;
    image: IFile;
    resume: IFile;
}
