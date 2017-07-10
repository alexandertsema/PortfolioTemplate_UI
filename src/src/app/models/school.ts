import { ICourse } from "app/models/course";
import { File } from "app/models/file"
import { IThesis } from "app/models/thesis";

export interface ISchool {
    id: number,
    name: string,
    gpa: number,
    description: string,
    degree: string,
    fieldOfStudy: string;
    startDate: number,
    endDate: number,
    image: File,
    thesis: IThesis,
    courses: ICourse[]
}