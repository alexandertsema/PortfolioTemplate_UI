import { IProjectCategory } from 'app/models/projectCategory';
import { IFile } from 'app/models/file'

export interface IProject {
    id: number,
    name: string,
    subtitle: string,
    image: IFile,
    description: string,
    link: string,
    projectCategory: IProjectCategory
}
