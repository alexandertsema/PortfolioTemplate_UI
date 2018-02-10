import { ICourse } from 'app/models/course';
import { IFile } from 'app/models/file'
import { IThesis } from 'app/models/thesis';

export interface ISchool {
    id: number,
    name: string,
    gpa?: number,
    description?: string,
    degree: string,
    fieldOfStudy: string;
    startDate: number,
    endDate: number,
    image: IFile,
    thesis: IThesis,
    courses?: ICourse[]
}
