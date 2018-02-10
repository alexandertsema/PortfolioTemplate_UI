import { IFileType } from 'app/models/fileType';
import { IResponsiveString } from 'app/models/responsiveString';

export interface IFile {
    id: number;
    name: string;
    size: number;
    data?: string;
    responsiveData?: IResponsiveString;
    fileType: IFileType;
}
