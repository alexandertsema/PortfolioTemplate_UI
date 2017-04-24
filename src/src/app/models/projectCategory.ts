import { Project } from "app/models/project";

export interface ProjectCategory {
    id: number,
    name: string,
    portfolioItems: Project[]
}