import { ProjectCategory } from "app/models/projectCategory";

export interface Project {
    id: number,
    name: string,
    description : string,
    link : string,
    image: File,
    projectCategory: ProjectCategory
}