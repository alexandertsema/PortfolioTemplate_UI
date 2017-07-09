import { IReference } from "app/models/reference";
import { File } from "app/models/file"

export interface IReferenceAuthor {
    id: number,
    name: string,
    image: File,
    companyName: string,
    companyLink: string,
    position: string,
    // references: IReference[]
}