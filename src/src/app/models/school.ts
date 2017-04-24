import { Course } from "app/models/course";

export interface School {
    id: number,
    name: string,
    gpa: number,
    description: string,
    degree: string,
    startDate: number,
    endDate: number,
    image: File
    courses: Course[]
}