import { ReferenceAuthor } from "app/models/referenceAuthor";

export interface Reference {
    id: number,
    description: string,
    pdf: File,
    referenceAuthor: ReferenceAuthor
}