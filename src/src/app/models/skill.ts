import { SkillCategory } from "app/models/skillCategory";

export interface Skill {
    id: number,
    name: string,
    priority: number,
    skillCategory: SkillCategory
}