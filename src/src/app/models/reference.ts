import { IReferenceAuthor } from "app/models/referenceAuthor";
import { File } from "app/models/file"

export interface IReference {
    id: number,
    description: string,
    pdf: File,
    referenceAuthor: IReferenceAuthor
}