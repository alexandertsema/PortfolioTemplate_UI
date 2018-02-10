import { IReference } from 'app/models/reference';
import { IFile } from 'app/models/file'

export interface IReferenceAuthor {
    id: number,
    name: string,
    image: File,
    companyName: string,
    companyLink: string,
    position: string
}
