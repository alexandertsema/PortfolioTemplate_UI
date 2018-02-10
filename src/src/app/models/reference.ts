import { IReferenceAuthor } from 'app/models/referenceAuthor';
import { IFile } from 'app/models/file'

export interface IReference {
    id: number,
    description: string,
    pdf: IFile,
    referenceAuthor: IReferenceAuthor
}
