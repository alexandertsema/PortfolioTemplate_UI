import { Project } from "app/models/project";

export interface IProjectCategory {
    id: number,
    name: string,
    portfolioItems: Project[]
}