import { Reference } from "app/models/reference";

export interface ReferenceAuthor {
    id: number,
    name: string,
    image: File,
    companyName: string,
    companyLink: string,
    position: string,
    references: Reference[]
}