import { IProjectCategory } from "app/models/projectCategory";
import { File } from "app/models/file"

export interface Project {
    id: number,
    name: string,
    subtitle: string,
    image: File,
    description : string,
    link : string,
    projectCategory: IProjectCategory
}