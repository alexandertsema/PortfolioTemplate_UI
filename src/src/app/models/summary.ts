import { File } from 'app/models/file';

export interface ISummary {
    id: number;
    title: string;
    description: string;
    image: File;
    resume: File;
}