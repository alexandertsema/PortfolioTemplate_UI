import { File } from "app/models/file"

export interface Summary{
    id: number,
    title: string,
    subtitle: string,
    description: string,
    image: File,
    resume: File
}